---
title: "CustomBattleBannerEffects"
description: "自定义战斗旗帜效果的注册中心，集中提供伤害、士气与移动速度等增益减益效果。"
---
# CustomBattleBannerEffects

**命名空间：** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattleObjects`
**模块：** `TaleWorlds.MountAndBlade.CustomBattle`
**类型：** `class`
**基类：** `object`
**源文件：** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattleObjects/CustomBattleBannerEffects.cs`（声明见第 7 行）

## 概述
`CustomBattleBannerEffects` 是自定义战斗（Custom Battle）子系统中的一个类，充当旗帜效果（BannerEffect）的注册中心。它在构造时创建并初始化全部十一种旗帜效果——涵盖近战伤害、对骑兵伤害、远程伤害、冲锋伤害、远程精度惩罚、士气冲击、承受伤害、盾牌伤害以及部队与坐骑移动速度等增益与减益——并通过静态属性对外统一暴露。自定义战斗中的部队编成逻辑通过静态属性读取这些效果，为阵型中的部队施加对应的加成。

## 心智模型
把自定义战斗的旗帜效果想象成一张「增益卡片库」：每张卡片是一种可叠加的战斗加成或减益。`CustomBattleBannerEffects` 就是这座卡片库本身——构造函数在开馆前把所有卡片登记入册（`RegisterAll`）、逐张填写效果说明与三档数值（`InitializeAll`），之后外部代码只需通过静态属性按名字取卡。私有静态属性 `Instance` 把访问转发到 `CustomGame.Current.CustomBattleBannerEffects`，因此效果实例由游戏上下文持有，本类只是其静态门面。

## 怎么用
### 怎么拿到
该类通过静态属性直接访问，无需手动实例化。游戏运行期间效果实例由 `CustomGame.Current.CustomBattleBannerEffects` 持有；在 mod 中读取效果时，直接引用静态属性即可。若需强制重新注册，可调用构造函数 `new CustomBattleBannerEffects()`（CustomBattleBannerEffects.cs:130），它会重新执行 `RegisterAll`。

### 典型用法
在自定义战斗的部队编成或效果结算逻辑中，通过静态属性获取指定的旗帜效果：

```csharp
// 获取自定义战斗的旗帜效果
CustomBattleBannerEffects effects = new CustomBattleBannerEffects();
BannerEffect meleeEffect = CustomBattleBannerEffects.IncreasedMeleeDamage;
BannerEffect speedEffect = CustomBattleBannerEffects.IncreasedTroopMovementSpeed;
```

### 坑
- 静态属性每次访问都会转发到 `CustomGame.Current.CustomBattleBannerEffects`，在游戏未初始化或自定义战斗未启动时调用会抛出空引用异常。
- 构造函数会向 `Game.Current.ObjectManager` 注册预设对象，重复实例化可能产生重复注册；除非确有必要，优先使用静态属性而非手动 new。
- 效果的三档数值在 `InitializeAll` 中硬编码，修改需要改源码，无法在运行时配置。

## 关键成员
| 成员 | 用途 |
|------|------|
| `CustomBattleBannerEffects()` | 构造函数，调用 `RegisterAll` 创建并初始化全部旗帜效果（CustomBattleBannerEffects.cs:130）。 |
| `Instance` | 私有静态属性，转发到 `CustomGame.Current.CustomBattleBannerEffects` 获取当前实例。 |
| `IncreasedMeleeDamage` | 静态属性，近战伤害增益效果。 |
| `IncreasedMeleeDamageAgainstMountedTroops` | 静态属性，对骑兵的近战伤害增益效果。 |
| `IncreasedRangedDamage` | 静态属性，远程伤害增益效果。 |
| `IncreasedChargeDamage` | 静态属性，冲锋伤害增益效果。 |
| `DecreasedRangedWeaponAccuracy` | 静态属性，远程精度惩罚减益效果。 |
| `DecreasedMoraleShock` | 静态属性，士气冲击减益效果。 |
| `DecreasedMeleeAttackDamage` | 静态属性，承受近战伤害减益效果。 |
| `DecreasedRangedAttackDamage` | 静态属性，承受远程伤害减益效果。 |
| `DecreasedShieldDamage` | 静态属性，盾牌承受伤害减益效果。 |
| `IncreasedTroopMovementSpeed` | 静态属性，部队移动速度增益效果。 |
| `IncreasedMountMovementSpeed` | 静态属性，坐骑移动速度增益效果。 |
| `RegisterAll()` | 私有方法，依次创建全部旗帜效果并调用 `InitializeAll`。 |
| `Create(string)` | 私有方法，通过 `Game.Current.ObjectManager.RegisterPresumedObject` 注册一个预设 `BannerEffect`。 |
| `InitializeAll()` | 私有方法，为全部效果设置本地化描述、三档数值与 `EffectIncrementType.AddFactor` 增量类型。 |

## 真实示例
```csharp
// 获取自定义战斗的旗帜效果
CustomBattleBannerEffects effects = new CustomBattleBannerEffects();
BannerEffect meleeEffect = CustomBattleBannerEffects.IncreasedMeleeDamage;
BannerEffect speedEffect = CustomBattleBannerEffects.IncreasedTroopMovementSpeed;
```

## 参见
- [CustomBattlePlayerType](../CustomBattlePlayerType)
- [CustomBattleCompositionData](../CustomBattleCompositionData)
- [../../core-extra/Game](../../core-extra/Game)

## 导航
- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
