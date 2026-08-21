---
title: "NativeObject"
description: "TaleWorlds.DotNet 中所有原生引擎对象（GameEntity、Scene、Camera 等）的托管基类，封装非托管指针与引用计数。"
---
# NativeObject

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public abstract class NativeObject`
**Base:** `System.Object`
**Source:** `TaleWorlds.DotNet/NativeObject.cs`

## 概述

`NativeObject` 不是一份「数据」，而是一个托管壳。它把 C++ 引擎侧用 `UIntPtr` 表示的对象句柄包装成可被 C# 垃圾回收器管理的引用，并为所有派生类（`GameEntity`、`Scene`、`Camera`、`Mesh`、`Skeleton`……）提供统一的身份比较与生命周期入口。它本身不持有业务状态，业务状态全部位于原生侧；托管侧只保存 `Pointer` 并负责在合适的时机增减原生引用计数。

## 心智模型

`NativeObject` 处在托管世界与 C++ 引擎世界的交界处，是整座引擎对象体系的地基。当你从 `Mission.Current.Scene`、`GameEntity.Instantiate` 或任何引擎工厂拿到一个 `GameEntity`、`Scene`、`Camera` 时，你拿到的其实都是某个 `NativeObject` 派生类的实例，背后都挂着一根 `Pointer`。引擎在构造时用 `IncreaseReferenceCount` 把原生引用加一，并在 C# 终结器（`~NativeObject`）里用 `DecreaseReferenceCount` 减回；为了避免 GC 不及时导致原生对象悬空，引擎还会把对象放进一个 `NativeObjectKeeper` 列表并持有 `GCHandle`，约十帧后若仍存活才真正释放强引用。这意味着：你通常不需要、也不应该手动 `new` 一个原生包装类，更不应把 `Pointer` 当作普通整数随意传递；比较身份请用重写的 `Equals`/`==`（基于 `Pointer`），不要用引用相等。当你确实要提前释放一个不再使用的对象时，才调用 `ManualInvalidate`，且调用后不得再访问该实例。

## 关键成员

| 成员 | 作用 |
| --- | --- |
| `Pointer` | 原生对象的 `UIntPtr` 句柄，是身份与生命周期的唯一依据 |
| `ManualInvalidate()` | 显式减少原生引用计数并标记为已失效，调用后禁止再访问 |
| `Equals(object)` / `==` / `!=` | 基于 `Pointer` 判断两个包装是否指向同一原生对象 |
| `GetHashCode()` | 直接返回 `Pointer` 的哈希，可在字典/集合中作为键 |
| `~NativeObject()`（终结器） | 在 GC 回收时减少原生引用计数，是自动释放的最后防线 |

## 真实示例

```csharp
// NativeObject 是抽象基类，你几乎永远从引擎 API 拿到它的派生实例。
Scene scene = Mission.Current.Scene;
GameEntity entity = GameEntity.Instantiate(scene, "my_prefab", true);

// Pointer 是每个原生包装对象的唯一原生句柄
UIntPtr rawPointer = entity.Pointer;

// 两个指向同一原生对象的包装被视为相等（基于 Pointer，而非引用）
bool sameObject = entity == GameEntity.CreateFromWeakEntity(entity.WeakEntity);

// 通常交给 GC / 引擎释放；确需提前释放才手动调用，且之后不可再访问
if (!sameObject)
{
    entity.ManualInvalidate();
}
```

## 风险与崩溃边界

- **不要手动 `new` 派生类。** 内部构造函数需要有效的原生指针并调用 `Construct(Pointer)`；只应通过 `Mission.Current.Scene`、`GameEntity.CreateEmpty`、`Scene.CreateNewScene` 等工厂获得实例。
- **`ManualInvalidate` 后访问即未定义。** 调用后原生引用已被释放，再读取 `Pointer` 或调用任何方法都可能导致原生侧崩溃。
- **`Pointer == UIntPtr.Zero` 代表空/失效。** 许多查找方法（如 `GameEntity.GetFirstEntityWithTag`）在无结果时返回 null 而非空包装，使用前务必判空。
- **不要用引用相等比较。** 同一原生对象可能被包装成多个托管实例，必须用 `==`/`Equals`（基于 `Pointer`）。
- **不要在引擎持有期间强行干预 GC。** 自动释放依赖 `HandleNativeObjects` 每帧遍历 `NativeObjectKeeper`，人为打乱这一节奏会造成原生对象提前或延迟释放。

## 跨版本提示

`NativeObject` 的机制在 1.3.15 与 1.4.5 中保持一致：抽象基类、`Pointer` 属性、`ManualInvalidate`、基于 `Pointer` 的相等比较与引用计数终结器均存在。跨版本 mod 不应假设派生类的 `Pointer` 数值稳定，也不要缓存原生指针跨版本复用；把场景/实体引用当成由引擎生命周期管理的托管对象来处理即可。

## 依赖关系

- 上游：[EngineApplicationInterface](../EngineApplicationInterface/) 提供 `IManaged` 的引用计数与类型定义查询，是 `Pointer` 得以被原生侧识别的基础。
- 下游：几乎所有引擎类型都派生自它，例如 [GameEntity](../GameEntity/)、[Scene](../Scene/)、[Camera](../Camera/)。
- 相关：原生包装的弱引用形态由 [GameEntity](../GameEntity/) 的 `WeakEntity` 属性暴露，避免强引用阻止 GC。
- 架构参考：[native-interop](../../../architecture/native-interop/) 解释托管/C++ 边界与引用计数约定。

- 父级：[engine API 索引](../)
- 同级：[GameEntity](../GameEntity/) · [Scene](../Scene/) · [Camera](../Camera/) · [EngineApplicationInterface](../EngineApplicationInterface/)
