<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WeaponComponent`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WeaponComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class WeaponComponent : ItemComponent`
**Base:** `ItemComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/WeaponComponent.cs`

## 概述

`WeaponComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `WeaponComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AddWeapon
`public void AddWeapon(WeaponComponentData weaponComponentData, ItemModifierGroup itemModifierGroup)`

**用途 / Purpose:** 向当前集合/状态中添加 `weapon`。

### GetCopy
`public override ItemComponent GetCopy()`

**用途 / Purpose:** 获取 `copy` 的当前值。

### GetItemType
`public ItemObject.ItemTypeEnum GetItemType()`

**用途 / Purpose:** 获取 `item type` 的当前值。

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

## 使用示例

```csharp
var component = agent.GetComponent<WeaponComponent>();
```

## 参见

- [完整类目录](../catalog)