<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterDeveloperVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterDeveloperVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterDeveloperVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterDeveloperVM.cs`

## 概述

`CharacterDeveloperVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentCharacterNameText` | `public string CurrentCharacterNameText { get; set; }` |
| `CurrentCharacter` | `public CharacterDeveloperHeroItemVM CurrentCharacter { get; set; }` |
| `CharacterList` | `public SelectorVM<SelectorItemVM> CharacterList { get; set; }` |
| `FocusVisualHint` | `public HintViewModel FocusVisualHint { get; set; }` |
| `ResetHint` | `public HintViewModel ResetHint { get; set; }` |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification { get; set; }` |
| `IsPlayerAccompanied` | `public bool IsPlayerAccompanied { get; set; }` |
| `UnspentCharacterPointsText` | `public string UnspentCharacterPointsText { get; set; }` |
| `TraitsText` | `public string TraitsText { get; set; }` |
| `PartyRoleText` | `public string PartyRoleText { get; set; }` |
| `UnspentCharacterPointsHint` | `public HintViewModel UnspentCharacterPointsHint { get; set; }` |
| `UnspentAttributePointsHint` | `public HintViewModel UnspentAttributePointsHint { get; set; }` |
| `PreviousCharacterHint` | `public BasicTooltipViewModel PreviousCharacterHint { get; set; }` |
| `NextCharacterHint` | `public BasicTooltipViewModel NextCharacterHint { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `ResetLbl` | `public string ResetLbl { get; set; }` |
| `CancelLbl` | `public string CancelLbl { get; set; }` |
| `SkillFocusText` | `public string SkillFocusText { get; set; }` |
| `AddFocusText` | `public string AddFocusText { get; set; }` |
| `SkillsText` | `public string SkillsText { get; set; }` |
| `UnopenedPerksNumForOtherChars` | `public int UnopenedPerksNumForOtherChars { get; set; }` |
| `HasUnopenedPerksForOtherCharacters` | `public bool HasUnopenedPerksForOtherCharacters { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `PreviousCharacterInputKey` | `public InputKeyItemVM PreviousCharacterInputKey { get; set; }` |
| `NextCharacterInputKey` | `public InputKeyItemVM NextCharacterInputKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### SelectHero
`public void SelectHero(Hero hero)`

**用途 / Purpose:** 处理 `select hero` 相关逻辑。

### ExecuteReset
`public void ExecuteReset()`

**用途 / Purpose:** 执行 `reset` 操作或流程。

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 `done` 操作或流程。

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 `cancel` 操作或流程。

### ApplyAllChanges
`public void ApplyAllChanges()`

**用途 / Purpose:** 将 `all changes` 应用到当前对象。

### IsThereAnyChanges
`public bool IsThereAnyChanges()`

**用途 / Purpose:** 处理 `is there any changes` 相关逻辑。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey gameKey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

### SetResetInputKey
`public void SetResetInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `reset input key` 的值或状态。

### SetPreviousCharacterInputKey
`public void SetPreviousCharacterInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `previous character input key` 的值或状态。

### SetNextCharacterInputKey
`public void SetNextCharacterInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `next character input key` 的值或状态。

### SetGetKeyTextFromKeyIDFunc
`public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject> getKeyTextFromKeyId)`

**用途 / Purpose:** 设置 `get key text from key i d func` 的值或状态。

## 使用示例

```csharp
var value = new CharacterDeveloperVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)