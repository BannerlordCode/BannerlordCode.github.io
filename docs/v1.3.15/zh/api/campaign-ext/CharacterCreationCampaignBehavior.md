<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterCreationCampaignBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationCampaignBehavior

**命名空间:** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CharacterCreationCampaignBehavior` 是 `TaleWorlds.CampaignSystem.CampaignBehaviors` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)