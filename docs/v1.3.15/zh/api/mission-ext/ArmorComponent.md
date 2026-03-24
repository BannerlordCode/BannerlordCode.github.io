# ArmorComponent

## 类概述

| 项目 | 说明 |
|------|------|
| **命名空间** | TaleWorlds.Core |
| **文件路径** | TaleWorlds.Core/ArmorComponent.cs |
| **基类** | ItemComponent |
| **类型** | 公开类 |

## 说明

`ArmorComponent` 是物品的护甲组件，存储护甲值和材质类型等属性。

## 关键属性

| 属性 | 类型 | 说明 |
|------|------|------|
| HeadArmor | int | 头部护甲值 |
| BodyArmor | int | 身体护甲值 |
| LegArmor | int | 腿部护甲值 |
| ArmArmor | int | 手臂护甲值 |
| ManeuverBonus | int | 机动性加成 |
| SpeedBonus | int | 速度加成 |
| ChargeBonus | int | 冲锋加成 |
| FamilyType | int | 家族类型 |
| MultiMeshHasGenderVariations | bool | 是否有性别变体 |
| MaterialType | ArmorMaterialTypes | 材质类型 |
| MeshesMask | SkinMask | 网格遮罩 |
| BodyMeshType | BodyMeshTypes | 身体网格类型 |
| BodyDeformType | BodyDeformTypes | 身体变形类型 |
| HairCoverType | HairCoverTypes | 头发覆盖类型 |
| BeardCoverType | BeardCoverTypes | 胡须覆盖类型 |
| ManeCoverType | HorseHarnessCoverTypes | 鬃毛覆盖类型 |
| TailCoverType | HorseTailCoverTypes | 尾巴覆盖类型 |
| StealthFactor | int | 隐蔽因子 |
| ReinsMesh | string | 缰绳网格 |
| ReinsRopeMesh | string | 缰绳绳索网格 |

## 枚举类型

### ArmorMaterialTypes

| 值 | 说明 |
|----|------|
| None | 无 |
| Cloth | 布料 |
| Leather | 皮革 |
| Chainmail | 锁甲 |
| Plate | 板甲 |

### HairCoverTypes

| 值 | 说明 |
|----|------|
| None | 无 |
| Type1 | 类型1 |
| Type2 | 类型2 |
| Type3 | 类型3 |
| Type4 | 类型4 |
| All | 全部 |

### BeardCoverTypes

| 值 | 说明 |
|----|------|
| None | 无 |
| Type1 | 类型1 |
| Type2 | 类型2 |
| Type3 | 类型3 |
| Type4 | 类型4 |
| All | 全部 |

## 使用示例

```csharp
// 获取物品的护甲组件
ItemObject armor = // 获取护甲物品;
ArmorComponent armorComp = armor.GetComponent<ArmorComponent>();

if (armorComp != null)
{
    int totalArmor = armorComp.HeadArmor + armorComp.BodyArmor + 
                      armorComp.LegArmor + armorComp.ArmArmor;
    
    if (armorComp.MaterialType == ArmorComponent.ArmorMaterialTypes.Plate)
    {
        // 板甲逻辑
    }
}
```
