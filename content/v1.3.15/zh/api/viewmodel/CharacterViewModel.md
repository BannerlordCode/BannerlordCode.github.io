---
title: "CharacterViewModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterViewModel / CharacterViewModel`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterViewModel / CharacterViewModel

## 心智模型

先把 `CharacterViewModel` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace**: TaleWorlds.Core.ViewModelCollection
**File**: 

`bannerlord-1.3.15/TaleWorlds.Core.ViewModelCollection/CharacterViewModel.cs

`
**Purpose**: 用于?UI 中显示角?装备信息?ViewModel 基类 / ViewModel base class for displaying character/equipment information in UI

## 概述 / Overview

`CharacterViewModel

` ?

`ViewModel

` 的具体实现，用于?UI 中显示角色信息和装备数据。它?

`HeroViewModel

` 和其他角色相?UI 组件广泛使用?

`CharacterViewModel

` is a concrete implementation of 

`ViewModel

` used to display character information and equipment data in the UI. It is widely used by 

`HeroViewModel

` and other character-related UI components.

## 继承关系 / Inheritance Hierarchy

`

`

`
ViewModel (TaleWorlds.Library)
    └── CharacterViewModel (TaleWorlds.Core.ViewModelCollection)
`

`

`

## 重要属?/ Important Properties

\| Property \| Type \| Description \|
\|----------\|------\|-------------\|
\| BannerCodeText \| 

`string

` \| 旗帜代码文本 / Banner code text \|
\| BodyProperties \| 

`string

` \| 身体属性字符串 / Body properties string \|
\| MountCreationKey \| 

`string

` \| 坐骑创建?/ Mount creation key \|
\| CharStringId \| 

`string

` \| 角色字符?ID / Character string ID \|
\| CustomAnimation \| 

`string

` \| 自定义动画名?/ Custom animation name \|
\| StancesIndex \| 

`int

` \| 姿态索?/ Stance index \|
\| IsFemale \| 

`bool

` \| 是否为女?/ Whether female \|
\| IsHidden \| 

`bool

` \| 是否隐藏 / Whether hidden \|
\| IsPlayingCustomAnimations \| 

`bool

` \| 是否正在播放自定义动?/ Whether playing custom animations \|
\| ShouldLoopCustomAnimation \| 

`bool

` \| 是否循环自定义动?/ Whether to loop custom animation \|
\| CustomAnimationProgressRatio \| 

`float

` \| 自定义动画进度比?/ Custom animation progress ratio \|
\| CustomAnimationWaitDuration \| 

`float

` \| 自定义动画等待时?/ Custom animation wait duration \|
\| Race \| 

`int

` \| 种族 / Race \|
\| HasMount \| 

`bool

` \| 是否有坐?/ Whether has mount \|
\| EquipmentCode \| 

`string

` \| 装备代码 / Equipment code \|
\| IdleAction \| 

`string

` \| 空闲动作 / Idle action \|
\| IdleFaceAnim \| 

`string

` \| 空闲面部动画 / Idle face animation \|
\| ArmorColor1 \| 

`uint

` \| 护甲颜色1 / Armor color 1 \|
\| ArmorColor2 \| 

`uint

` \| 护甲颜色2 / Armor color 2 \|
\| LeftHandWieldedEquipmentIndex \| 

`int

` \| 左手武器索引 / Left hand weapon index \|
\| RightHandWieldedEquipmentIndex \| 

`int

` \| 右手武器索引 / Right hand weapon index \|

## 重要方法 / Important Methods

\| Method \| Signature \| Description \|
\|--------\|-----------\|-------------\|
\| SetEquipment \| 

`public void SetEquipment(EquipmentIndex index, EquipmentElement item)

` \| 设置指定索引的装?/ Set equipment at specified index \|
\| SetEquipment \| 

`public virtual void SetEquipment(Equipment equipment)

` \| 设置全部装备 / Set all equipment \|
\| FillFrom \| 

`public void FillFrom(CharacterViewModel characterViewModel, int seed)

` \| 从另一?CharacterViewModel 填充 / Fill from another CharacterViewModel \|
\| FillFrom \| 

`public void FillFrom(BasicCharacterObject character, int seed, string bannerCode)

` \| ?BasicCharacterObject 填充 / Fill from BasicCharacterObject \|
\| ExecuteEquipWeaponAtIndex \| 

`public void ExecuteEquipWeaponAtIndex(EquipmentIndex index, bool isLeftHand)

` \| 执行装备武器命令 / Execute equip weapon command \|
\| ExecuteStartCustomAnimation \| 

`public void ExecuteStartCustomAnimation(string animation, bool loop, float loopInterval)

` \| 开始自定义动画 / Start custom animation \|
\| ExecuteStopCustomAnimation \| 

`public void ExecuteStopCustomAnimation()

` \| 停止自定义动?/ Stop custom animation \|

## 使用示例 / Usage Example

`

`

`csharp
// ?BasicCharacterObject 创建 CharacterViewModel
// Create CharacterViewModel from BasicCharacterObject
public void DisplayCharacter(BasicCharacterObject character)
{
    CharacterViewModel characterVM = new CharacterViewModel();
    characterVM.FillFrom(character, -1, null);
    
    // 设置装备
    // Set equipment
    EquipmentIndex index = EquipmentIndex.Head;
    EquipmentElement equipment = character.Equipment[index];
    characterVM.SetEquipment(index, equipment);
}

// 在自定义 UI 中使?
// Use in custom UI
public class MyCharacterSheetVM : ViewModel
{
    private CharacterViewModel _selectedCharacter;
    
    [DataSourceProperty]
    public CharacterViewModel SelectedCharacter
    {
        get =&gt; this._selectedCharacter;
        set
        {
            if (SetField(ref this._selectedCharacter, value, "SelectedCharacter"))
            {
                // 处理角色变更
                // Handle character change
            }
        }
    }
}
`

`

`

## 姿态类?/ Stance Types

`CharacterViewModel.StancesTypes

` 枚举定义了角色展示时的姿态：

\| Value \| Description \|
\|-------\|-------------\|
\| None \| 无姿?/ No stance \|
\| EmphasizeFace \| 强调面部 / Emphasize face \|
\| SideView \| 侧面视图 / Side view \|
\| CelebrateVictory \| 庆祝胜利 / Celebrate victory \|
\| OnMount \| 在马背上 / On mount \|

## 注意事项 / Notes

- 

`CharacterViewModel

` 主要用于 UI 显示，不应包含复杂的业务逻辑
- 

`CharacterViewModel

` is primarily for UI display and should not contain complex business logic
- 装备变更?

`EquipmentCode

` 会自动重新计?
- 

`EquipmentCode

` is automatically recalculated after equipment changes
- 动画相关的属性允?Gauntlet UI 直接控制角色动画
- Animation-related properties allow Gauntlet UI to directly control character animations
