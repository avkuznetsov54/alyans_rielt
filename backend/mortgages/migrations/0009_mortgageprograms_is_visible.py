# Generated by Django 3.0.2 on 2020-02-13 04:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mortgages', '0008_auto_20200212_2102'),
    ]

    operations = [
        migrations.AddField(
            model_name='mortgageprograms',
            name='is_visible',
            field=models.BooleanField(default=False, verbose_name='Отображать, Да/нет'),
        ),
    ]