<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CharacterCreationCampaignBehavior` is a class in the `TaleWorlds.CampaignSystem.CampaignBehaviors` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### RegisterEvents

```csharp
public override void RegisterEvents()
```

### SyncData

```csharp
public override void SyncData(IDataStore dataStore)
```

### InitializeCharacterCreationStages

```csharp
public void InitializeCharacterCreationStages(CharacterCreationManager characterCreationManager)
```

### InitializeCharacterCreationCultures

```csharp
public void InitializeCharacterCreationCultures(CharacterCreationManager characterCreationManager)
```

### InitializeData

```csharp
public void InitializeData(CharacterCreationManager characterCreationManager)
```

### FaceGenUpdated

```csharp
public void FaceGenUpdated()
```

### UpdateParentEquipment

```csharp
public void UpdateParentEquipment(CharacterCreationManager characterCreationManager, MBEquipmentRoster motherEquipment, MBEquipmentRoster fatherEquipment, string motherAnimation, string fatherAnimation)
```

### AddEducationMenu

```csharp
public void AddEducationMenu(CharacterCreationManager characterCreationManager)
```

### SetHeroAge

```csharp
public void SetHeroAge(float age)
```

### IsUrbanOccupation

```csharp
public static bool IsUrbanOccupation(string occupation)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)