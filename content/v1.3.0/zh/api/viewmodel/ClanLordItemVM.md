---
title: "ClanLordItemVM"
description: "ClanLordItemVM 的自动生成类参考。"
---
# ClanLordItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanLordItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanLordItemVM.cs`

## 概述

`ClanLordItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Skills` | `public MBBindingList<EncyclopediaSkillVM> Skills { get; set; }` |
| `Traits` | `public MBBindingList<EncyclopediaTraitItemVM> Traits { get; set; }` |
| `HeroModel` | `public HeroViewModel HeroModel { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsChild` | `public bool IsChild { get; set; }` |
| `IsTeleporting` | `public bool IsTeleporting { get; set; }` |
| `IsRecallVisible` | `public bool IsRecallVisible { get; set; }` |
| `IsRecallEnabled` | `public bool IsRecallEnabled { get; set; }` |
| `IsTalkVisible` | `public bool IsTalkVisible { get; set; }` |
| `IsTalkEnabled` | `public bool IsTalkEnabled { get; set; }` |
| `CanShowLocationOfHero` | `public bool CanShowLocationOfHero { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `IsFamilyMember` | `public bool IsFamilyMember { get; set; }` |
| `IsPregnant` | `public bool IsPregnant { get; set; }` |
| `Visual` | `public CharacterImageIdentifierVM Visual { get; set; }` |
| `Banner_9` | `public BannerImageIdentifierVM Banner_9 { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `CurrentActionText` | `public string CurrentActionText { get; set; }` |
| `RelationToMainHeroText` | `public string RelationToMainHeroText { get; set; }` |
| `GovernorOfText` | `public string GovernorOfText { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `PregnantHint` | `public HintViewModel PregnantHint { get; set; }` |
| `ShowOnMapHint` | `public HintViewModel ShowOnMapHint { get; set; }` |
| `RecallHint` | `public HintViewModel RecallHint { get; set; }` |
| `TalkHint` | `public HintViewModel TalkHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ClanLordItemVM 实例
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.RefreshValues();
```

### ExecuteLocationLink
`public void ExecuteLocationLink(string link)`

**用途 / Purpose:** **用途 / Purpose:** 执行 location link 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanLordItemVM 实例
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.ExecuteLocationLink("example");
```

### UpdateProperties
`public void UpdateProperties()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 properties 的最新表示。

```csharp
// 先通过子系统 API 拿到 ClanLordItemVM 实例
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.UpdateProperties();
```

### ExecuteLink
`public void ExecuteLink()`

**用途 / Purpose:** **用途 / Purpose:** 执行 link 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanLordItemVM 实例
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.ExecuteLink();
```

### OnCharacterSelect
`public void OnCharacterSelect()`

**用途 / Purpose:** **用途 / Purpose:** 在 character select 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ClanLordItemVM 实例
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.OnCharacterSelect();
```

### ExecuteBeginHint
`public virtual void ExecuteBeginHint()`

**用途 / Purpose:** **用途 / Purpose:** 执行 begin hint 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanLordItemVM 实例
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.ExecuteBeginHint();
```

### ExecuteEndHint
`public virtual void ExecuteEndHint()`

**用途 / Purpose:** **用途 / Purpose:** 执行 end hint 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanLordItemVM 实例
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.ExecuteEndHint();
```

### GetHero
`public Hero GetHero()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hero 的结果。

```csharp
// 先通过子系统 API 拿到 ClanLordItemVM 实例
ClanLordItemVM clanLordItemVM = ...;
var result = clanLordItemVM.GetHero();
```

### ExecuteRename
`public void ExecuteRename()`

**用途 / Purpose:** **用途 / Purpose:** 执行 rename 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanLordItemVM 实例
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.ExecuteRename();
```

### ExecuteShowOnMap
`public void ExecuteShowOnMap()`

**用途 / Purpose:** **用途 / Purpose:** 执行 show on map 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanLordItemVM 实例
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.ExecuteShowOnMap();
```

### ExecuteRecall
`public void ExecuteRecall()`

**用途 / Purpose:** **用途 / Purpose:** 执行 recall 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanLordItemVM 实例
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.ExecuteRecall();
```

### ExecuteTalk
`public void ExecuteTalk()`

**用途 / Purpose:** **用途 / Purpose:** 执行 talk 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanLordItemVM 实例
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.ExecuteTalk();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ClanLordItemVM 实例
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.OnFinalize();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ClanLordItemVM clanLordItemVM = ...;
clanLordItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)