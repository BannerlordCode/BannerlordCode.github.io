<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerComponent`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BannerComponent : WeaponComponent`
**Base:** `WeaponComponent`
**File:** `TaleWorlds.Core/BannerComponent.cs`

## 概述

`BannerComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `BannerComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `BannerLevel` | `public int BannerLevel { get; }` |
| `BannerEffect` | `public BannerEffect BannerEffect { get; }` |

## 主要方法

### GetCopy
`public override ItemComponent GetCopy()`

**用途 / Purpose:** 获取 `copy` 的当前值。

### GetBannerEffectBonus
`public float GetBannerEffectBonus()`

**用途 / Purpose:** 获取 `banner effect bonus` 的当前值。

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

## 使用示例

```csharp
var component = agent.GetComponent<BannerComponent>();
```

## 参见

- [完整类目录](../catalog)