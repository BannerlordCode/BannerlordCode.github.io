# WeaponComponent

## 类概述

| 项目 | 说明 |
|------|------|
| **命名空间** | TaleWorlds.Core |
| **文件路径** | TaleWorlds.Core/WeaponComponent.cs |
| **基类** | ItemComponent |
| **类型** | 公开类 |

## 说明

`WeaponComponent` 是物品的武器组件，存储武器数据和属性。每个武器物品都包含一个 WeaponComponent。

## 关键属性

| 属性 | 类型 | 说明 |
|------|------|------|
| Weapons | MBReadOnlyList | 武器数据列表 |
| PrimaryWeapon | WeaponComponentData | 主要武器数据 |

## 关键方法

| 方法 | 返回值 | 说明 |
|------|--------|------|
| AddWeapon(WeaponComponentData weaponComponentData, ItemModifierGroup itemModifierGroup) | void | 添加武器 |
| GetCopy() | ItemComponent | 创建副本 |
| GetItemType() | ItemObject.ItemTypeEnum | 获取物品类型 |

## 使用示例

```csharp
// 获取物品的武器组件
ItemObject sword = // 获取剑物品;
WeaponComponent weaponComp = sword.GetComponent<WeaponComponent>();

if (weaponComp != null)
{
    WeaponComponentData primaryWeapon = weaponComp.PrimaryWeapon;
    WeaponClass weaponClass = primaryWeapon.WeaponClass;
    
    // 检查武器类型
    if (weaponClass == WeaponClass.OneHandedSword)
    {
        // 单手剑逻辑
    }
}
```

## 枚举类型

### WeaponClass

武器类别枚举，包含但不限于：
- Undefined
- OneHandedSword
- TwoHandedSword
- OneHandedAxe
- TwoHandedAxe
- OneHandedPolearm
- TwoHandedPolearm
- Dagger
- Pick
- TwoHandedPick
- Hammer
- TwoHandedHammer
- Lance
- TwoHandedLance
- Crossbow
- Throwing
- Bow
- Stone
