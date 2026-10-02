---
title: "CharacterDeveloperVM"
description: "CharacterDeveloperVM：TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper 的 public 类，继承 ViewModel；公开成员 44 个（方法 14、属性 29、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterDeveloperVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterDeveloperVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterDeveloperVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterDeveloperVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

CharacterDeveloperVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterDeveloperVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CharacterDeveloperVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 44 个：14 方法、29 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterDeveloperVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`，继承链 CharacterDeveloperVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 29/44，方法 14/44），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterDeveloperVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterDeveloperVM` | `public CharacterDeveloperVM(Action closeCharacterDeveloper)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `SelectHero` | `public void SelectHero(Hero hero)` | 方法 |
| `ExecuteReset` | `public void ExecuteReset()` | 方法 |
| `ExecuteDone` | `public void ExecuteDone()` | 方法 |
| `ExecuteCancel` | `public void ExecuteCancel()` | 方法 |
| `ApplyAllChanges` | `public void ApplyAllChanges()` | 方法 |
| `IsThereAnyChanges` | `public bool IsThereAnyChanges()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `CurrentCharacterNameText` | `public string CurrentCharacterNameText` | 属性 |
| `CurrentCharacter` | `public CharacterDeveloperHeroItemVM CurrentCharacter` | 属性 |
| `SelectorVM` | `public SelectorVM<SelectorItemVM>CharacterList` | 属性 |
| `FocusVisualHint` | `public HintViewModel FocusVisualHint` | 属性 |
| `ResetHint` | `public HintViewModel ResetHint` | 属性 |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification` | 属性 |
| `IsPlayerAccompanied` | `public bool IsPlayerAccompanied` | 属性 |
| `UnspentCharacterPointsText` | `public string UnspentCharacterPointsText` | 属性 |
| `TraitsText` | `public string TraitsText` | 属性 |
| `PartyRoleText` | `public string PartyRoleText` | 属性 |
| `UnspentCharacterPointsHint` | `public HintViewModel UnspentCharacterPointsHint` | 属性 |
| `UnspentAttributePointsHint` | `public HintViewModel UnspentAttributePointsHint` | 属性 |
| `LevelHint` | `public HintViewModel LevelHint` | 属性 |
| `UnopenedPerksHint` | `public HintViewModel UnopenedPerksHint` | 属性 |
| `PreviousCharacterHint` | `public BasicTooltipViewModel PreviousCharacterHint` | 属性 |
| `NextCharacterHint` | `public BasicTooltipViewModel NextCharacterHint` | 属性 |
| `DoneLbl` | `public string DoneLbl` | 属性 |
| `ResetLbl` | `public string ResetLbl` | 属性 |
| `CancelLbl` | `public string CancelLbl` | 属性 |
| `SkillFocusText` | `public string SkillFocusText` | 属性 |
| `AddFocusText` | `public string AddFocusText` | 属性 |
| `SkillsText` | `public string SkillsText` | 属性 |
| `UnopenedPerksNumForCurrentCharacter` | `public int UnopenedPerksNumForCurrentCharacter` | 属性 |
| `HasUnopenedPerksForCurrentCharacter` | `public bool HasUnopenedPerksForCurrentCharacter` | 属性 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey gameKey)` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotKey)` | 方法 |
| `SetPreviousCharacterInputKey` | `public void SetPreviousCharacterInputKey(HotKey hotKey)` | 方法 |
| `SetNextCharacterInputKey` | `public void SetNextCharacterInputKey(HotKey hotKey)` | 方法 |
| `SetGetKeyTextFromKeyIDFunc` | `public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject>getKeyTextFromKeyId)` | 方法 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | 属性 |
| `PreviousCharacterInputKey` | `public InputKeyItemVM PreviousCharacterInputKey` | 属性 |
| `NextCharacterInputKey` | `public InputKeyItemVM NextCharacterInputKey` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 AttributeBoundSkillItemVM](../AttributeBoundSkillItemVM/)
- [同命名空间 CharacterAttributeItemVM](../CharacterAttributeItemVM/)
- [同命名空间 CharacterDeveloperHeroItemVM](../CharacterDeveloperHeroItemVM/)
- [同命名空间 FocusAddedByPlayerEvent](../FocusAddedByPlayerEvent/)
