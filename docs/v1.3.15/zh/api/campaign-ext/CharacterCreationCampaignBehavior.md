<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterCreationCampaignBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationCampaignBehavior : CampaignBehaviorBase, ICharacterCreationContentHandler`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CharacterCreationCampaignBehavior.cs`

## 概述

`CharacterCreationCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### InitializeCharacterCreationStages
`public void InitializeCharacterCreationStages(CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** 初始化 `character creation stages` 的状态、资源或绑定。

### InitializeCharacterCreationCultures
`public void InitializeCharacterCreationCultures(CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** 初始化 `character creation cultures` 的状态、资源或绑定。

### InitializeData
`public void InitializeData(CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** 初始化 `data` 的状态、资源或绑定。

### FaceGenUpdated
`public void FaceGenUpdated()`

**用途 / Purpose:** 处理 `face gen updated` 相关逻辑。

### UpdateParentEquipment
`public void UpdateParentEquipment(CharacterCreationManager characterCreationManager, MBEquipmentRoster motherEquipment, MBEquipmentRoster fatherEquipment, string motherAnimation, string fatherAnimation)`

**用途 / Purpose:** 更新 `parent equipment` 的状态或数据。

### AddEducationMenu
`public void AddEducationMenu(CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** 向当前集合/状态中添加 `education menu`。

### SetHeroAge
`public void SetHeroAge(float age)`

**用途 / Purpose:** 设置 `hero age` 的值或状态。

### IsUrbanOccupation
`public static bool IsUrbanOccupation(string occupation)`

**用途 / Purpose:** 处理 `is urban occupation` 相关逻辑。

## 使用示例

```csharp
var value = new CharacterCreationCampaignBehavior();
value.RegisterEvents();
```

## 参见

- [完整类目录](../catalog)