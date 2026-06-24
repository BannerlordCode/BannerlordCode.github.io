<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyRecruitTroopVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PartyRecruitTroopVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyRecruitTroopVM : PartyTroopManagerVM`
**Base:** `PartyTroopManagerVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyRecruitTroopVM.cs`

## 概述

`PartyRecruitTroopVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `EffectText` | `public string EffectText { get; set; }` |
| `RecruitText` | `public string RecruitText { get; set; }` |
| `RecruitAllText` | `public string RecruitAllText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnTroopRecruited
`public void OnTroopRecruited(PartyCharacterVM recruitedCharacter)`

**用途 / Purpose:** 当 `troop recruited` 事件触发时调用此方法。

### OpenPopUp
`public override void OpenPopUp()`

**用途 / Purpose:** 处理 `open pop up` 相关逻辑。

### ExecuteDone
`public override void ExecuteDone()`

**用途 / Purpose:** 执行 `done` 操作或流程。

### ExecuteCancel
`public override void ExecuteCancel()`

**用途 / Purpose:** 执行 `cancel` 操作或流程。

### ExecuteRecruitAll
`public void ExecuteRecruitAll()`

**用途 / Purpose:** 执行 `recruit all` 操作或流程。

## 使用示例

```csharp
var value = new PartyRecruitTroopVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)