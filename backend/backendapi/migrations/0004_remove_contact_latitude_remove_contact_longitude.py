# Generated by Django 4.2.4 on 2023-11-10 20:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backendapi', '0003_footer_hero_tag_technology_project'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contact',
            name='latitude',
        ),
        migrations.RemoveField(
            model_name='contact',
            name='longitude',
        ),
    ]