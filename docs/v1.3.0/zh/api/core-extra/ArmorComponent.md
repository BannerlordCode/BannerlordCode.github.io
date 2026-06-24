<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ArmorComponent`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ArmorComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class ArmorComponent : ItemComponent`
**Base:** `ItemComponent`
**File:** `TaleWorlds.Core/ArmorComponent.cs`

## 概述

`ArmorComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `ArmorComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `HeadArmor` | `public int HeadArmor { get; }` |
| `BodyArmor` | `public int BodyArmor { get; }` |
| `LegArmor` | `public int LegArmor { get; }` |
| `ArmArmor` | `public int ArmArmor { get; }` |
| `ManeuverBonus` | `public int ManeuverBonus { get; }` |
| `SpeedBonus` | `public int SpeedBonus { get; }` |
| `ChargeBonus` | `public int ChargeBonus { get; }` |
| `FamilyType` | `public int FamilyType { get; }` |
| `MultiMeshHasGenderVariations` | `public bool MultiMeshHasGenderVariations { get; }` |
| `MaterialType` | `public ArmorComponent.ArmorMaterialTypes MaterialType { get; }` |
| `MeshesMask` | `public SkinMask MeshesMask { get; }` |
| `BodyMeshType` | `public ArmorComponent.BodyMeshTypes BodyMeshType { get; }` |
| `BodyDeformType` | `public ArmorComponent.BodyDeformTypes BodyDeformType { get; }` |
| `HairCoverType` | `public ArmorComponent.HairCoverTypes HairCoverType { get; }` |
| `BeardCoverType` | `public ArmorComponent.BeardCoverTypes BeardCoverType { get; }` |
| `ManeCoverType` | `public ArmorComponent.HorseHarnessCoverTypes ManeCoverType { get; }` |
| `TailCoverType` | `public ArmorComponent.HorseTailCoverTypes TailCoverType { get; }` |
| `StealthFactor` | `public int StealthFactor { get; }` |
| `ReinsMesh` | `public string ReinsMesh { get; }` |
| `ReinsRopeMesh` | `public string ReinsRopeMesh { get; }` |

## 主要方法

### GetCopy
`public override ItemComponent GetCopy()`

**用途 / Purpose:** 获取 `copy` 的当前值。

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

## 使用示例

```csharp
var component = agent.GetComponent<ArmorComponent>();
```

## 参见

- [完整类目录](../catalog)