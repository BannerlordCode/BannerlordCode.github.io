<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BladeData`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BladeData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class BladeData : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/BladeData.cs`

## 概述

`BladeData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `BladeData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ThrustDamageType` | `public DamageTypes ThrustDamageType { get; }` |
| `ThrustDamageFactor` | `public float ThrustDamageFactor { get; }` |
| `SwingDamageType` | `public DamageTypes SwingDamageType { get; }` |
| `SwingDamageFactor` | `public float SwingDamageFactor { get; }` |
| `BladeLength` | `public float BladeLength { get; }` |
| `BladeWidth` | `public float BladeWidth { get; }` |
| `StackAmount` | `public short StackAmount { get; }` |
| `PhysicsMaterial` | `public string PhysicsMaterial { get; }` |
| `BodyName` | `public string BodyName { get; }` |
| `HolsterMeshName` | `public string HolsterMeshName { get; }` |
| `HolsterBodyName` | `public string HolsterBodyName { get; }` |
| `HolsterMeshLength` | `public float HolsterMeshLength { get; }` |

## 主要方法

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode childNode)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

## 使用示例

```csharp
var value = new BladeData();
```

## 参见

- [完整类目录](../catalog)