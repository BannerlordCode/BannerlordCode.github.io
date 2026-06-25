---
title: "CharacterDeveloperVM"
description: "CharacterDeveloperVM 的自动生成类参考。"
---
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

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperVM 实例
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.RefreshValues();
```

### SelectHero
`public void SelectHero(Hero hero)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperVM 实例
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.SelectHero(hero);
```

### ExecuteReset
`public void ExecuteReset()`

**用途 / Purpose:** 执行 「reset」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperVM 实例
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.ExecuteReset();
```

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 「done」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperVM 实例
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.ExecuteDone();
```

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 「cancel」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperVM 实例
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.ExecuteCancel();
```

### ApplyAllChanges
`public void ApplyAllChanges()`

**用途 / Purpose:** 将 「all changes」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperVM 实例
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.ApplyAllChanges();
```

### IsThereAnyChanges
`public bool IsThereAnyChanges()`

**用途 / Purpose:** 判断当前对象是否处于 「there any changes」 状态或条件。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperVM 实例
CharacterDeveloperVM characterDeveloperVM = ...;
var result = characterDeveloperVM.IsThereAnyChanges();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperVM 实例
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey gameKey)`

**用途 / Purpose:** 为 「cancel input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperVM 实例
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.SetCancelInputKey(gameKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「done input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperVM 实例
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.SetDoneInputKey(hotKey);
```

### SetResetInputKey
`public void SetResetInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「reset input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperVM 实例
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.SetResetInputKey(hotKey);
```

### SetPreviousCharacterInputKey
`public void SetPreviousCharacterInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「previous character input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperVM 实例
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.SetPreviousCharacterInputKey(hotKey);
```

### SetNextCharacterInputKey
`public void SetNextCharacterInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「next character input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperVM 实例
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.SetNextCharacterInputKey(hotKey);
```

### SetGetKeyTextFromKeyIDFunc
`public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject> getKeyTextFromKeyId)`

**用途 / Purpose:** 为 「get key text from key i d func」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterDeveloperVM 实例
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.SetGetKeyTextFromKeyIDFunc(func<string, getKeyTextFromKeyId);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CharacterDeveloperVM characterDeveloperVM = ...;
characterDeveloperVM.RefreshValues();
```

## 参见

- [本区域目录](../)