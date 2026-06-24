<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyCompositionVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PartyCompositionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyCompositionVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyCompositionVM.cs`

## 概述

`PartyCompositionVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Party`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Party` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `InfantryCount` | `public int InfantryCount { get; set; }` |
| `RangedCount` | `public int RangedCount { get; set; }` |
| `CavalryCount` | `public int CavalryCount { get; set; }` |
| `HorseArcherCount` | `public int HorseArcherCount { get; set; }` |
| `InfantryHint` | `public HintViewModel InfantryHint { get; set; }` |
| `RangedHint` | `public HintViewModel RangedHint { get; set; }` |
| `CavalryHint` | `public HintViewModel CavalryHint { get; set; }` |
| `HorseArcherHint` | `public HintViewModel HorseArcherHint { get; set; }` |

## 主要方法

### OnTroopRemoved
`public void OnTroopRemoved(FormationClass formationClass, int count)`

**用途 / Purpose:** 当 `troop removed` 事件触发时调用此方法。

### OnTroopAdded
`public void OnTroopAdded(FormationClass formationClass, int count)`

**用途 / Purpose:** 当 `troop added` 事件触发时调用此方法。

### RefreshCounts
`public void RefreshCounts(MBBindingList<PartyCharacterVM> list)`

**用途 / Purpose:** 刷新 `counts` 的显示或缓存。

## 使用示例

```csharp
var value = new PartyCompositionVM();
value.OnTroopRemoved(formationClass, 0);
```

## 参见

- [完整类目录](../catalog)