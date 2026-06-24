<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyTroopManagerItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PartyTroopManagerItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyTroopManagerItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp/PartyTroopManagerItemVM.cs`

## 概述

`PartyTroopManagerItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SetFocused` | `public Action<PartyTroopManagerItemVM> SetFocused { get; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `PartyCharacter` | `public PartyCharacterVM PartyCharacter { get; set; }` |
| `IsTroopUpgradable` | `public bool IsTroopUpgradable { get; set; }` |
| `IsTroopRecruitable` | `public bool IsTroopRecruitable { get; set; }` |

## 主要方法

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**用途 / Purpose:** 执行 `set focused` 操作或流程。

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**用途 / Purpose:** 执行 `set unfocused` 操作或流程。

### ExecuteOpenTroopEncyclopedia
`public void ExecuteOpenTroopEncyclopedia()`

**用途 / Purpose:** 执行 `open troop encyclopedia` 操作或流程。

## 使用示例

```csharp
var value = new PartyTroopManagerItemVM();
value.ExecuteSetFocused();
```

## 参见

- [完整类目录](../catalog)