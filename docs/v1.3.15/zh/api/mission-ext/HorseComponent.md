# HorseComponent

## 类概述

| 项目 | 说明 |
|------|------|
| **命名空间** | TaleWorlds.Core |
| **文件路径** | TaleWorlds.Core/HorseComponent.cs |
| **基类** | ItemComponent |
| **类型** | 公开类 |

## 说明

`HorseComponent` 是马匹物品的组件，存储马匹的速度、机动性、冲锋伤害等属性。用于区分骑乘马、驮运动物和牲畜。

## 关键属性

| 属性 | 类型 | 说明 |
|------|------|------|
| Monster | Monster | 怪物/生物定义 |
| Maneuver | int | 机动性属性 |
| ChargeDamage | int | 冲锋伤害 |
| Speed | int | 速度属性 |
| BodyLength | int | 身体长度 |
| HitPoints | int | 生命值（只读，从 Monster 获取） |
| HitPointBonus | int | 额外生命值加成 |
| IsRideable | bool | 是否可骑乘 |
| IsPackAnimal | bool | 是否为驮运动物 |
| IsMount | bool | 是否为骑乘马（只读） |
| IsLiveStock | bool | 是否为牲畜（只读） |
| HorseMaterialNames | MBReadOnlyList | 马匹材质名称列表 |
| MeatCount | int | 肉量（只读） |
| HideCount | int | 皮革量（只读） |
| SkeletonScale | SkeletonScale | 骨骼缩放 |

## 枚举类型

### MaterialProperty

| 属性 | 类型 | 说明 |
|------|------|------|
| Name | string | 材质名称 |
| MeshMultiplier | List> | 网格缩放倍数列表 |

## 使用示例

```csharp
// 获取物品的马匹组件
ItemObject horse = // 获取马匹物品;
HorseComponent horseComp = horse.GetComponent<HorseComponent>();

if (horseComp != null)
{
    if (horseComp.IsMount)
    {
        // 可骑乘马匹
        int speed = horseComp.Speed;
        int maneuver = horseComp.Maneuver;
        int charge = horseComp.ChargeDamage;
    }
    else if (horseComp.IsPackAnimal)
    {
        // 驮运动物
    }
    else if (horseComp.IsLiveStock)
    {
        // 牲畜
    }
}
```
