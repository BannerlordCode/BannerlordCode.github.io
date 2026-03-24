# CharacterViewModel / CharacterViewModel

**Namespace**: TaleWorlds.Core.ViewModelCollection
**File**: `bannerlord-1.3.15/TaleWorlds.Core.ViewModelCollection/CharacterViewModel.cs`
**Purpose**: ViewModel base class for displaying character/equipment information in UI / 用于在 UI 中显示角色/装备信息的 ViewModel 基类

## Overview / 概述

`CharacterViewModel` is a concrete implementation of `ViewModel` used to display character information and equipment data in the UI. It is widely used by `HeroViewModel` and other character-related UI components.

`CharacterViewModel` 是 `ViewModel` 的具体实现，用于在 UI 中显示角色信息和装备数据。它被 `HeroViewModel` 和其他角色相关 UI 组件广泛使用。

## Inheritance Hierarchy / 继承关系

```
ViewModel (TaleWorlds.Library)
    └── CharacterViewModel (TaleWorlds.Core.ViewModelCollection)
```

## Important Properties / 重要属性

| Property | Type | Description |
|----------|------|-------------|
| BannerCodeText | `string` | Banner code text / 旗帜代码文本 |
| BodyProperties | `string` | Body properties string / 身体属性字符串 |
| MountCreationKey | `string` | Mount creation key / 坐骑创建键 |
| CharStringId | `string` | Character string ID / 角色字符串 ID |
| CustomAnimation | `string` | Custom animation name / 自定义动画名称 |
| StanceIndex | `int` | Stance index / 姿态索引 |
| IsFemale | `bool` | Whether female / 是否为女性 |
| IsHidden | `bool` | Whether hidden / 是否隐藏 |
| IsPlayingCustomAnimations | `bool` | Whether playing custom animations / 是否正在播放自定义动画 |
| ShouldLoopCustomAnimation | `bool` | Whether to loop custom animation / 是否循环自定义动画 |
| CustomAnimationProgressRatio | `float` | Custom animation progress ratio / 自定义动画进度比率 |
| CustomAnimationWaitDuration | `float` | Custom animation wait duration / 自定义动画等待时长 |
| Race | `int` | Race / 种族 |
| HasMount | `bool` | Whether has mount / 是否有坐骑 |
| EquipmentCode | `string` | Equipment code / 装备代码 |
| IdleAction | `string` | Idle action / 空闲动作 |
| IdleFaceAnim | `string` | Idle face animation / 空闲面部动画 |
| ArmorColor1 | `uint` | Armor color 1 / 护甲颜色1 |
| ArmorColor2 | `uint` | Armor color 2 / 护甲颜色2 |
| LeftHandWieldedEquipmentIndex | `int` | Left hand weapon index / 左手武器索引 |
| RightHandWieldedEquipmentIndex | `int` | Right hand weapon index / 右手武器索引 |

## Important Methods / 重要方法

| Method | Signature | Description |
|--------|-----------|-------------|
| SetEquipment | `public void SetEquipment(EquipmentIndex index, EquipmentElement item)` | Set equipment at specified index / 设置指定索引的装备 |
| SetEquipment | `public virtual void SetEquipment(Equipment equipment)` | Set all equipment / 设置全部装备 |
| FillFrom | `public void FillFrom(CharacterViewModel characterViewModel, int seed)` | Fill from another CharacterViewModel / 从另一个 CharacterViewModel 填充 |
| FillFrom | `public void FillFrom(BasicCharacterObject character, int seed, string bannerCode)` | Fill from BasicCharacterObject / 从 BasicCharacterObject 填充 |
| ExecuteEquipWeaponAtIndex | `public void ExecuteEquipWeaponAtIndex(EquipmentIndex index, bool isLeftHand)` | Execute equip weapon command / 执行装备武器命令 |
| ExecuteStartCustomAnimation | `public void ExecuteStartCustomAnimation(string animation, bool loop, float loopInterval)` | Start custom animation / 开始自定义动画 |
| ExecuteStopCustomAnimation | `public void ExecuteStopCustomAnimation()` | Stop custom animation / 停止自定义动画 |

## Usage Example / 使用示例

```csharp
// Create CharacterViewModel from BasicCharacterObject
// 从 BasicCharacterObject 创建 CharacterViewModel
public void DisplayCharacter(BasicCharacterObject character)
{
    CharacterViewModel characterVM = new CharacterViewModel();
    characterVM.FillFrom(character, -1, null);
    
    // Set equipment
    // 设置装备
    EquipmentIndex index = EquipmentIndex.Head;
    EquipmentElement equipment = character.Equipment[index];
    characterVM.SetEquipment(index, equipment);
}

// Use in custom UI
// 在自定义 UI 中使用
public class MyCharacterSheetVM : ViewModel
{
    private CharacterViewModel _selectedCharacter;
    
    [DataSourceProperty]
    public CharacterViewModel SelectedCharacter
    {
        get => this._selectedCharacter;
        set
        {
            if (SetField(ref this._selectedCharacter, value, "SelectedCharacter"))
            {
                // Handle character change
                // 处理角色变更
            }
        }
    }
}
```

## Stance Types / 姿态类型

`CharacterViewModel.StancesTypes` enum defines character display stances:

| Value | Description |
|-------|-------------|
| None | No stance / 无姿态 |
| EmphasizeFace | Emphasize face / 强调面部 |
| SideView | Side view / 侧面视图 |
| CelebrateVictory | Celebrate victory / 庆祝胜利 |
| OnMount | On mount / 在马背上 |

## Notes / 注意事项

- `CharacterViewModel` is primarily for UI display and should not contain complex business logic
- `CharacterViewModel` 主要用于 UI 显示，不应包含复杂的业务逻辑
- `EquipmentCode` is automatically recalculated after equipment changes
- 装备变更后 `EquipmentCode` 会自动重新计算
- Animation-related properties allow Gauntlet UI to directly control character animations
- 动画相关的属性允许 Gauntlet UI 直接控制角色动画
