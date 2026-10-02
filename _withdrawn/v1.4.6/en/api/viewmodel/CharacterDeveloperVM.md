---
title: "CharacterDeveloperVM"
description: "CharacterDeveloperVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper, inheriting ViewModel; 44 exposed members (14 methods, 29 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterDeveloperVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterDeveloperVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterDeveloperVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterDeveloperVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

CharacterDeveloperVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterDeveloperVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CharacterDeveloperVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 44 public/protected members: 14 methods, 29 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterDeveloperVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`, inheritance chain CharacterDeveloperVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 29/44, methods 14/44), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterDeveloperVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CharacterDeveloperVM` | `public CharacterDeveloperVM(Action closeCharacterDeveloper)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `SelectHero` | `public void SelectHero(Hero hero)` | method |
| `ExecuteReset` | `public void ExecuteReset()` | method |
| `ExecuteDone` | `public void ExecuteDone()` | method |
| `ExecuteCancel` | `public void ExecuteCancel()` | method |
| `ApplyAllChanges` | `public void ApplyAllChanges()` | method |
| `IsThereAnyChanges` | `public bool IsThereAnyChanges()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `CurrentCharacterNameText` | `public string CurrentCharacterNameText` | property |
| `CurrentCharacter` | `public CharacterDeveloperHeroItemVM CurrentCharacter` | property |
| `SelectorVM` | `public SelectorVM<SelectorItemVM>CharacterList` | property |
| `FocusVisualHint` | `public HintViewModel FocusVisualHint` | property |
| `ResetHint` | `public HintViewModel ResetHint` | property |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification` | property |
| `IsPlayerAccompanied` | `public bool IsPlayerAccompanied` | property |
| `UnspentCharacterPointsText` | `public string UnspentCharacterPointsText` | property |
| `TraitsText` | `public string TraitsText` | property |
| `PartyRoleText` | `public string PartyRoleText` | property |
| `UnspentCharacterPointsHint` | `public HintViewModel UnspentCharacterPointsHint` | property |
| `UnspentAttributePointsHint` | `public HintViewModel UnspentAttributePointsHint` | property |
| `LevelHint` | `public HintViewModel LevelHint` | property |
| `UnopenedPerksHint` | `public HintViewModel UnopenedPerksHint` | property |
| `PreviousCharacterHint` | `public BasicTooltipViewModel PreviousCharacterHint` | property |
| `NextCharacterHint` | `public BasicTooltipViewModel NextCharacterHint` | property |
| `DoneLbl` | `public string DoneLbl` | property |
| `ResetLbl` | `public string ResetLbl` | property |
| `CancelLbl` | `public string CancelLbl` | property |
| `SkillFocusText` | `public string SkillFocusText` | property |
| `AddFocusText` | `public string AddFocusText` | property |
| `SkillsText` | `public string SkillsText` | property |
| `UnopenedPerksNumForCurrentCharacter` | `public int UnopenedPerksNumForCurrentCharacter` | property |
| `HasUnopenedPerksForCurrentCharacter` | `public bool HasUnopenedPerksForCurrentCharacter` | property |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey gameKey)` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotKey)` | method |
| `SetPreviousCharacterInputKey` | `public void SetPreviousCharacterInputKey(HotKey hotKey)` | method |
| `SetNextCharacterInputKey` | `public void SetNextCharacterInputKey(HotKey hotKey)` | method |
| `SetGetKeyTextFromKeyIDFunc` | `public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject>getKeyTextFromKeyId)` | method |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | property |
| `PreviousCharacterInputKey` | `public InputKeyItemVM PreviousCharacterInputKey` | property |
| `NextCharacterInputKey` | `public InputKeyItemVM NextCharacterInputKey` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AttributeBoundSkillItemVM](../AttributeBoundSkillItemVM/)
- [same namespace CharacterAttributeItemVM](../CharacterAttributeItemVM/)
- [same namespace CharacterDeveloperHeroItemVM](../CharacterDeveloperHeroItemVM/)
- [same namespace FocusAddedByPlayerEvent](../FocusAddedByPlayerEvent/)
