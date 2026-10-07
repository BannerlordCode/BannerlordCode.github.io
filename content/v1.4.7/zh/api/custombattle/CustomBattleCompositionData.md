---
title: "CustomBattleCompositionData"
description: "描述自定义战斗部队构成的结构体，记录远程、骑兵与骑射三类兵种的百分比。"
---
# CustomBattleCompositionData

**命名空间：** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`
**模块：** `TaleWorlds.MountAndBlade.CustomBattle`
**类型：** `struct`
**基类：** `System.ValueType`
**源文件：** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleCompositionData.cs`（声明见第 6 行）

## 概述
`CustomBattleCompositionData` 是自定义战斗（Custom Battle）子系统中的一个结构体，用于描述一支部队的兵种构成。它以三个百分比字段记录部队中远程兵种、骑兵兵种以及骑射（远程骑兵）兵种所占的比例，并附带一个 `IsValid` 标记表示该构成数据是否有效。自定义战斗在生成或校验部队时会读取这份构成数据。

## 心智模型
把自定义战斗的部队想象成一份「兵种配方」：远程兵种占多少、骑兵占多少、骑射占多少。`CustomBattleCompositionData` 就是这张配方单——三个百分比字段是配料，`IsValid` 是质检章。结构体是值类型，传递时按值复制，因此不必担心多个地方共享同一份配方被意外改动；构造函数在创建时就会把 `IsValid` 置为 `true`，表示这是一份通过校验的合法配方。

## 怎么用
### 怎么拿到
该结构体通过构造函数创建。调用 `new CustomBattleCompositionData(rangedPercentage, cavalryPercentage, rangedCavalryPercentage)` 并传入三个百分比值即可得到一份构成数据；构造函数会自动把 `IsValid` 设为 `true`（CustomBattleCompositionData.cs:9）。

### 典型用法
在自定义战斗的部队配置中，构造一份构成数据并读取其字段：

```csharp
// 构造一支部队构成：30% 远程、20% 骑兵、10% 骑射
CustomBattleCompositionData composition = new CustomBattleCompositionData(0.3f, 0.2f, 0.1f);
if (composition.IsValid)
{
    float ranged = composition.RangedPercentage;
}
```

### 坑
- 三个百分比字段是 `readonly`，构造完成后无法修改；需要调整构成只能重新构造一个新实例。
- 百分比之和不必等于 1，但传入负数或大于 1 的值不会在构造函数里被拦截，`IsValid` 仍为 `true`，校验责任在使用方。
- 结构体按值传递，在方法间频繁传递大字段时会有复制开销（本结构体仅四个字段，开销可忽略）。

## 关键成员
| 成员 | 用途 |
|------|------|
| `CustomBattleCompositionData(float, float, float)` | 构造函数，按远程、骑兵、骑射三个百分比初始化构成数据，并将 `IsValid` 置为 `true`（CustomBattleCompositionData.cs:9）。 |
| `IsValid` | 只读布尔字段，标记该构成数据是否有效。 |
| `RangedPercentage` | 只读浮点字段，远程兵种所占百分比。 |
| `CavalryPercentage` | 只读浮点字段，骑兵兵种所占百分比。 |
| `RangedCavalryPercentage` | 只读浮点字段，骑射（远程骑兵）兵种所占百分比。 |

## 真实示例
```csharp
// 构造部队构成并读取远程兵种比例
CustomBattleCompositionData composition = new CustomBattleCompositionData(0.3f, 0.2f, 0.1f);
if (composition.IsValid)
{
    float ranged = composition.RangedPercentage;
    float cavalry = composition.CavalryPercentage;
}
```

## 参见
- [CustomBattlePlayerType](../CustomBattlePlayerType)
- [CustomBattleBannerEffects](../CustomBattleBannerEffects)
- [../../core-extra/Game](../../core-extra/Game)

## 导航
- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
