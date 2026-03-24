# ItemModifier / 物品修改器

**Namespace**: TaleWorlds.Core  
**File**: `bannerlord-1.3.15/TaleWorlds.Core/ItemModifier.cs`  
**Purpose**: 物品质量修改器,用于调整物品的属性值(如伤害、护甲等)

## 关键属性 / Key Properties

| 属性 | 类型 | 描述 |
|------|------|------|
| Name | TextObject | 修改器名称 |
| Damage | int | 伤害调整值 |
| Speed | int | 速度调整值 |
| MissileSpeed | int | 弹丸速度调整值 |
| Armor | int | 护甲调整值 |
| HitPoints | short | 生命值调整值 |
| StackCount | short | 堆叠数量调整 |
| MountSpeed | float | 马匹速度倍率 |
| Maneuver | float | 马匹机动性倍率 |
| ChargeDamage | float | 冲锋伤害倍率 |
| MountHitPoints | float | 马匹生命值倍率 |
| PriceMultiplier | float | 价格倍率 |
| ItemQuality | ItemQuality | 物品质量等级 |

## 物品质量等级 / Item Quality

```csharp
public enum ItemQuality
{
    Common,     // 普通
    Inferior,   // 低劣
    Poor,       // 较差
    Fine,       // 精良
    Masterwork, // 杰作
    Legendary   // 传奇
}
```

## 关键方法 / Key Methods

| 方法 | 签名 | 描述 |
|------|------|------|
| ModifyDamage | `int ModifyDamage(int baseDamage)` | 应用伤害修改 |
| ModifySpeed | `int ModifySpeed(int baseSpeed)` | 应用速度修改 |
| ModifyMissileSpeed | `int ModifyMissileSpeed(int baseSpeed)` | 应用弹丸速度修改 |
| ModifyArmor | `int ModifyArmor(int armorValue)` | 应用护甲修改 |
| ModifyHitPoints | `short ModifyHitPoints(short baseHitPoints)` | 应用生命值修改 |
| ModifyMountSpeed | `int ModifyMountSpeed(int baseSpeed)` | 应用马匹速度修改 |
| ModifyMountManeuver | `int ModifyMountManeuver(int baseManeuver)` | 应用马匹机动性修改 |
| ModifyMountCharge | `int ModifyMountCharge(int baseCharge)` | 应用冲锋伤害修改 |
| ModifyMountHitPoints | `int ModifyMountHitPoints(int baseCharge)` | 应用马匹生命值修改 |

## 使用示例 / Usage Example

```csharp
// 获取物品修改器
ItemModifier modifier = MBObjectManager.Instance.GetObject<ItemModifier>("fine");

// 应用修改到基础伤害
int baseDamage = 50;
int modifiedDamage = modifier.ModifyDamage(baseDamage);

// 应用修改到护甲
int baseArmor = 100;
int modifiedArmor = modifier.ModifyArmor(baseArmor);

// 检查质量等级
if (modifier.ItemQuality == ItemQuality.Masterwork)
{
    // 杰作品质处理
}

// 获取价格倍率
float priceMultiplier = modifier.PriceMultiplier;
int finalPrice = (int)(basePrice * priceMultiplier);
```

## 修改器组 / Item Modifier Groups

ItemModifier 通常属于 ItemModifierGroup,用于在游戏中随机生成物品质量。

```csharp
// 获取修改器组
ItemModifierGroup group = MBObjectManager.Instance.GetObject<ItemModifierGroup>("weapon_modifiers");

// 从组中随机获取修改器
ItemModifier randomModifier = group.GetRandomModifier();
```
