<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CreateFreeCorpseMountAgent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CreateFreeCorpseMountAgent

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class CreateFreeCorpseMountAgent : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/CreateFreeCorpseMountAgent.cs`

## 概述

`CreateFreeCorpseMountAgent` 位于 `NetworkMessages.FromServer`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `NetworkMessages.FromServer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AgentIndex` | `public int AgentIndex { get; }` |
| `HorseItem` | `public EquipmentElement HorseItem { get; }` |
| `HorseHarnessItem` | `public EquipmentElement HorseHarnessItem { get; }` |
| `Position` | `public Vec3 Position { get; }` |
| `Direction` | `public Vec2 Direction { get; }` |
| `CorpsesToFadeIndex` | `public int CorpsesToFadeIndex { get; }` |
| `AttachedWeaponCount` | `public int AttachedWeaponCount { get; }` |
| `AttachedWeapons` | `public MBList<MissionWeapon> AttachedWeapons { get; }` |
| `AttachedWeaponsBoneIndices` | `public MBList<sbyte> AttachedWeaponsBoneIndices { get; }` |
| `AttachedWeaponsLocalFrames` | `public MBList<MatrixFrame> AttachedWeaponsLocalFrames { get; }` |
| `DeathActionIndex` | `public ActionIndexCache DeathActionIndex { get; }` |

## 使用示例

```csharp
var example = new CreateFreeCorpseMountAgent();
```

## 参见

- [完整类目录](../catalog)