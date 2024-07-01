from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    city = models.CharField(max_length=100)
    address = models.TextField()

    def __str__(self):
        return self.name
    class Meta:
              verbose_name_plural = "companies"

class Vacancy(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, related_name='vacancies', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
    class Meta:
              verbose_name_plural = "vacancies"