<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TroopSelectionItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TroopSelectionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TroopSelectionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection/TroopSelectionItemVM.cs`

## 概述

`TroopSelectionItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Troop` | `public TroopRosterElement Troop { get; }` |
| `MaxAmount` | `public int MaxAmount { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsRosterFull` | `public bool IsRosterFull { get; set; }` |
| `IsTroopHero` | `public bool IsTroopHero { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |
| `CurrentAmount` | `public int CurrentAmount { get; set; }` |
| `HeroHealthPercent` | `public int HeroHealthPercent { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `AmountText` | `public string AmountText { get; set; }` |
| `Visual` | `public CharacterImageIdentifierVM Visual { get; set; }` |
| `TierIconData` | `public StringItemWithHintVM TierIconData { get; set; }` |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData { get; set; }` |

## 主要方法

### ExecuteAdd
`public void ExecuteAdd()`

**用途 / Purpose:** 执行 `add` 操作或流程。

### ExecuteRemove
`public void ExecuteRemove()`

**用途 / Purpose:** 执行 `remove` 操作或流程。

### ExecuteLink
`public void ExecuteLink()`

**用途 / Purpose:** 执行 `link` 操作或流程。

## 使用示例

```csharp
var value = new TroopSelectionItemVM();
value.ExecuteAdd();
```

## 参见

- [完整类目录](../catalog)