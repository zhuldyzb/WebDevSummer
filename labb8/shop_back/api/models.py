from django.db import models 


class Category(models.Model):
        name = models.CharField(max_length=200)

        def __str__(self):
            return self.name
        class Meta:
              verbose_name_plural = "categories"
        
class Product(models.Model):
        name = models.CharField(max_length=200) 
        price = models.FloatField()
        description = models.TextField() 
        count= models.IntegerField
        is_active = models.BooleanField
        category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)


        def __str__(self):
            return self.name
    
