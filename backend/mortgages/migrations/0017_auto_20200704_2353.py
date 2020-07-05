# Generated by Django 3.0.2 on 2020-07-04 16:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mortgages', '0016_mortgageprograms_is_use_preference_bank'),
    ]

    operations = [
        migrations.AddField(
            model_name='mortgageprograms',
            name='businesman',
            field=models.CharField(blank=True, choices=[('yes', 'Да'), ('no', 'Нет')], db_index=True, max_length=255, verbose_name='Собсвенники бизнеса и ИП'),
        ),
        migrations.AddField(
            model_name='mortgageprograms',
            name='businesman_comment',
            field=models.CharField(blank=True, db_index=True, max_length=355, verbose_name='Комментарий к Собсвенники бизнеса и ИП'),
        ),
        migrations.AddField(
            model_name='mortgageprograms',
            name='non_resident',
            field=models.CharField(blank=True, choices=[('yes', 'Да'), ('no', 'Нет')], db_index=True, max_length=255, verbose_name='Не резиденты РФ'),
        ),
        migrations.AddField(
            model_name='mortgageprograms',
            name='non_resident_comment',
            field=models.CharField(blank=True, db_index=True, max_length=355, verbose_name='Комментарий к Не резиденты РФ'),
        ),
    ]
