---
title: "CharacterViewModel"
description: "CharacterViewModel：TaleWorlds.Core.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 33 个（方法 7、属性 23、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.Core.ViewModelCollection/CharacterViewModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterViewModel

**Namespace:** `TaleWorlds.Core.ViewModelCollection`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class CharacterViewModel : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/CharacterViewModel.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## 概述

CharacterViewModel 位于 TaleWorlds.Core.ViewModelCollection 模块，源文件 TaleWorlds.Core.ViewModelCollection/CharacterViewModel.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CharacterViewModel → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 33 个：7 方法、23 属性、2 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterViewModel 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.Core.ViewModelCollection`），命名空间 `TaleWorlds.Core.ViewModelCollection`，继承链 CharacterViewModel → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 23/33，方法 7/33），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core.ViewModelCollection/CharacterViewModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterViewModel` | `public CharacterViewModel()` | 构造函数 |
| `CharacterViewModel` | `public CharacterViewModel(CharacterViewModel.StanceTypes stance = CharacterViewModel.StanceTypes.None)` | 构造函数 |
| `SetEquipment` | `public void SetEquipment(EquipmentIndex index, EquipmentElement item)` | 方法 |
| `SetEquipment` | `public virtual void SetEquipment(Equipment equipment)` | 方法 |
| `FillFrom` | `public void FillFrom(BasicCharacterObject character, int seed = -1, string bannerCode = null)` | 方法 |
| `FillFrom` | `public void FillFrom(CharacterViewModel characterViewModel, int seed = -1)` | 方法 |
| `ExecuteEquipWeaponAtIndex` | `public void ExecuteEquipWeaponAtIndex(EquipmentIndex index, bool isLeftHand)` | 方法 |
| `ExecuteStartCustomAnimation` | `public void ExecuteStartCustomAnimation(string animation, bool loop = false, float loopInterval = 0f)` | 方法 |
| `ExecuteStopCustomAnimation` | `public void ExecuteStopCustomAnimation()` | 方法 |
| `BannerCodeText` | `public string BannerCodeText` | 属性 |
| `BodyProperties` | `public string BodyProperties` | 属性 |
| `MountCreationKey` | `public string MountCreationKey` | 属性 |
| `CharStringId` | `public string CharStringId` | 属性 |
| `CustomAnimation` | `public string CustomAnimation` | 属性 |
| `StanceIndex` | `public int StanceIndex` | 属性 |
| `IsFemale` | `public bool IsFemale` | 属性 |
| `IsHidden` | `public bool IsHidden` | 属性 |
| `IsTableauEnabled` | `public bool IsTableauEnabled` | 属性 |
| `IsPlayingCustomAnimations` | `public bool IsPlayingCustomAnimations` | 属性 |
| `ShouldLoopCustomAnimation` | `public bool ShouldLoopCustomAnimation` | 属性 |
| `CustomAnimationProgressRatio` | `public float CustomAnimationProgressRatio` | 属性 |
| `CustomAnimationWaitDuration` | `public float CustomAnimationWaitDuration` | 属性 |
| `Race` | `public int Race` | 属性 |
| `HasMount` | `public bool HasMount` | 属性 |
| `EquipmentCode` | `public string EquipmentCode` | 属性 |
| `IdleAction` | `public string IdleAction` | 属性 |
| `IdleFaceAnim` | `public string IdleFaceAnim` | 属性 |
| `ArmorColor1` | `public uint ArmorColor1` | 属性 |
| `ArmorColor2` | `public uint ArmorColor2` | 属性 |
| `LeftHandWieldedEquipmentIndex` | `public int LeftHandWieldedEquipmentIndex` | 属性 |
| `RightHandWieldedEquipmentIndex` | `public int RightHandWieldedEquipmentIndex` | 属性 |
| `StanceTypes` | `public enum StanceTypes` | 属性 |
| `StanceTypes` | `public enum StanceTypes` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 BattleResultVM](../BattleResultVM/)
- [同命名空间 CharacterEquipmentItemVM](../CharacterEquipmentItemVM/)
- [同命名空间 CharacterWithActionViewModel](../CharacterWithActionViewModel/)
- [同命名空间 ControlCharacterCreationStage](../ControlCharacterCreationStage/)
