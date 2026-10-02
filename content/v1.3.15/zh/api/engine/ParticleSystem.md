---
title: "ParticleSystem"
description: "挂到 GameEntity 或 Skeleton 某根骨上的运行时粒子发射器实例，由静态工厂创建并随父节点变换运动。"
---
# ParticleSystem

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class ParticleSystem : GameEntityComponent`
**Base:** `GameEntityComponent`
**Source:** `TaleWorlds.Engine/ParticleSystem.cs`

## 概述

`ParticleSystem` 是 [GameEntityComponent](../GameEntityComponent/) 的一种，代表一个已挂到 [GameEntity](../GameEntity/) 或 [Skeleton](../Skeleton/) 某根骨上的粒子发射器实例。它不像 [Mesh](../Mesh/) / [MetaMesh](../MetaMesh/) 那样是持久资源，而是运行时由粒子系统模板（如 `"smoke"`）动态生成、随父节点变换而运动的瞬时特效。

## 心智模型

`ParticleSystem` 是"已实例化的特效"——继承自 [GameEntityComponent](../GameEntityComponent/)，没有 public 构造器，只能用静态工厂创建：要么 `CreateParticleSystemAttachedToBone` 挂到骨架某骨（角色手中的火把、披风尘土），要么 `CreateParticleSystemAttachedToEntity` 挂到 [GameEntity](../GameEntity/)。注意它内部 `AddMesh` 实际调用的是 `IMetaMesh.AddMesh`（与 [MetaMesh](../MetaMesh/) 共用底层），但 modder 一般不直接加网格。关键陷阱：粒子系统由运行时管理生命周期，父实体移除或特效播完可能被自动销毁；用 `SetDontRemoveFromEntity(true)` 可防止它随实体一起被清理。何时用：在骨 / 实体上动态播放烟雾、火花、血液等特效；何时不用：持久静态几何用 [Mesh](../Mesh/)。获取实例：工厂返回即实例，运行时 ID 由粒子系统管理器维护。

## 关键成员

| 成员 | 作用 |
| --- | --- |
| `CreateParticleSystemAttachedToBone(name, skeleton, boneIndex, ref frame)` | 工厂：把粒子系统挂到骨架指定骨上（角色特效） |
| `CreateParticleSystemAttachedToEntity(name, entity, ref frame)` | 工厂：把粒子系统挂到 [GameEntity](../GameEntity/) 上 |
| `SetEnable(bool)` / `Restart()` | 开关粒子系统 / 重新从头播放 |
| `SetRuntimeEmissionRateMultiplier(float)` | 运行时动态调节发射速率（如受伤时加大火花） |
| `SetLocalFrame(in MatrixFrame)` / `GetLocalFrame()` | 设置 / 读取相对父节点的局部变换 |
| `HasAliveParticles()` | 查询是否还有存活粒子，用于判断特效是否播完 |
| `SetDontRemoveFromEntity(bool)` | 防止父实体被移除时一并销毁本粒子系统 |
| `SetParticleEffectByName(name)` | 运行时切换播放的粒子特效模板 |

## 真实示例

```csharp
// 在角色头部骨上挂一个烟雾粒子系统
MatrixFrame localFrame = MatrixFrame.Identity;
ParticleSystem smoke = ParticleSystem.CreateParticleSystemAttachedToBone("smoke", skeleton, (sbyte)0, ref localFrame);

// 受伤时提高发射速率并重新播放
smoke.SetRuntimeEmissionRateMultiplier(2.0f);
smoke.Restart();

// 不让父实体移除时误删它，并查询是否还有存活粒子
smoke.SetDontRemoveFromEntity(true);
bool alive = smoke.HasAliveParticles();
```

## 风险与崩溃边界

- **没有 public 构造器。** 必须且只能用静态工厂（`AttachedToBone` / `AttachedToEntity`）创建；`new ParticleSystem()` 不可用。
- **生命周期由引擎管理。** 父实体被移除或特效自然播完时实例可能被销毁；需要长驻应调用 `SetDontRemoveFromEntity(true)`。
- **`AddMesh` 走 MetaMesh 底层。** 该方法内部实际调用 `IMetaMesh.AddMesh`，并非独立逻辑，modder 通常不需要直接调用。
- **`ref` 参数要求变量。** `CreateParticleSystemAttachedToBone` 等的 `boneLocalFrame` / `globalFrame` 是 `ref` / `in` 参数，必须传变量而非临时字面量。
- **挂骨需有效 Skeleton。** 传入已释放或无效的 [Skeleton](../Skeleton/) 会让底层原生调用崩溃；挂接前确认骨架仍有效。

## 依赖关系

- 上游：[GameEntityComponent](../GameEntityComponent/) 提供组件挂载机制；[GameEntity](../GameEntity/) 与 [Skeleton](../Skeleton/) 是实际挂载父节点。
- 下游：粒子系统内部通过 `IMetaMesh.AddMesh` 复用 [MetaMesh](../MetaMesh/) 底层来承载其网格表示。
- 相关：特效模板是引擎资源，按名查找（与 [Resource](../Resource/) 同源）；渲染由 [Scene](../Scene/) 驱动。
- 架构参考：[native-interop](../../../architecture/native-interop/) 解释托管组件与原生粒子实例的绑定方式。

- 父级：[engine API 索引](../)
- 同级：[Skeleton](../Skeleton/) · [MetaMesh](../MetaMesh/) · [Mesh](../Mesh/) · [GameEntity](../GameEntity/) · [GameEntityComponent](../GameEntityComponent/)
