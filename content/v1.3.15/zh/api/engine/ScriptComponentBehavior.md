---
title: "ScriptComponentBehavior"
description: "ScriptComponentBehavior 是场景脚本组件的 C# 侧基类，引擎按场景中的脚本组件实例化子类并回调 OnInit、OnTick、OnPhysicsCollision 等生命周期方法。"
---
# ScriptComponentBehavior

**Namespace:** `TaleWorlds.Engine`  
**Module:** `TaleWorlds.Engine`  
**类型：** `public abstract class ScriptComponentBehavior : DotNetObject`  
**Base:** `DotNetObject`  
**Source:** `TaleWorlds.Engine/ScriptComponentBehavior.cs`

## 概述

`ScriptComponentBehavior` 是放在场景/预制体里的脚本组件在 C# 侧的基类。与 `ScriptComponent`（原生句柄）不同，它继承自 `DotNetObject`，是纯托管对象：引擎在加载场景时为每个脚本组件实例化一个子类，并把 `OnInit`、`OnTick`、`OnPhysicsCollision`、`OnRemoved` 等虚回调在对应时刻调用回来。它还负责告诉引擎「我需要多高频的 tick」——通过重写 `GetTickRequirement()` 返回 `TickRequirement` 标志，或用 `SetScriptComponentToTick()` 动态改变。这是 mod 编写场景交互逻辑（机关、触发器、AI 辅助）最常用的入口之一。

## 心智模型

`ScriptComponentBehavior` 是场景脚本组件的 C# 侧，引擎按场景中放置的脚本组件实例化子类，并在生命周期各阶段回调虚方法；你通过重写 `OnInit`、`OnTick`、`OnPhysicsCollision` 等来注入逻辑，而不是直接轮询。tick 频率由 `GetTickRequirement()` 与 `SetScriptComponentToTick()` 协商决定，滥用高频 tick 会直接拖累帧率。它继承自 `DotNetObject` 而非 `NativeObject`，因此没有原生指针，只有对所属 `GameEntity`、`Scene` 与 `ScriptComponent` 的弱引用，避免阻止原生实体回收。mod 不应 `new` 它，而是由场景数据驱动创建；也不要在行为里保存对 `GameEntity` 的强引用，否则会拖住实体释放。

## 关键成员

| 成员 | 作用 |
| --- | --- |
| `GameEntity`（WeakGameEntity） | 该行为所属实体的弱引用，构造时由 `Construct` 设置 |
| `Scene` | 行为所在场景，从实体取得，实体移除时置 `null` |
| `ScriptComponent`（ManagedScriptComponent） | 配对原生脚本组件句柄，可经它读写原生状态 |
| `GetTickRequirement()` | 引擎询问本行为需要多高频 tick，返回 `TickRequirement` 标志位 |
| `SetScriptComponentToTick(TickRequirement)` | 动态把本行为加入对应频率的 tick 列表（另有 `...MT` 线程安全版） |
| `OnInit` / `OnTick` / `OnPhysicsCollision` | 引擎在初始化、每帧、碰撞时回调的虚方法，mod 重写 |

## 真实示例

最常见的用法是继承 `ScriptComponentBehavior`，在 `OnInit` 申请每帧 tick，并在 `OnTick` 里做逻辑。下面的自旋机关每帧打印一次，演示了 tick 协商与调试输出：

```csharp
public class Spinner : ScriptComponentBehavior
{
    protected internal override void OnInit()
    {
        SetScriptComponentToTick(TickRequirement.Tick);
    }

    protected internal override void OnTick(float dt)
    {
        MBDebug.Print("旋转中, dt=" + dt);
        MBDebug.RenderText(10f, 10f, "spinner active");
    }
}
```

`TickRequirement.Tick` 表示每帧 tick；若只需偶尔更新，可改用 `TickOccasionally` 以降低开销。`RenderText` 等调试绘制在发布版本会被条件编译剔除。

## 风险与崩溃边界

- **tick 频率即性能预算。** 用 `Tick` 而非 `TickOccasionally`/`None` 会让行为每帧被调用；大量高频行为会直接拉低帧率。
- **`OnPhysicsCollision` 在物理热路径上。** 在其中做重计算或分配会放大碰撞成本，应保持轻量。
- **不要在行为里强引用 `GameEntity`。** 属性是 `WeakGameEntity`；若保存强引用，原生实体无法被回收，造成内存与场景泄漏。
- **`OnRemoved` 后状态失效。** 实体被移除时 `Scene` 会被置 `null`，此后访问会 `NullReferenceException`。

## 跨版本提示

1.3.15 与 1.4.5 的 `ScriptComponentBehavior` 公开面一致：公开的 `SetScriptComponentToTick`、`SetScriptComponentToTickMT`、`GetTickRequirement` 以及全部 `On*` 回调、`TickRequirement` 枚举均未变。唯一差异是 1.4.5 把返回类型从 `ScriptComponentBehavior.TickRequirement` 简写为 `TickRequirement`，对 mod 透明。

## 依赖关系

- 上游：[ScriptComponent](../ScriptComponent/) 经 `ScriptComponent` 属性配对；[EngineApplicationInterface](../EngineApplicationInterface/) 提供底层转发。
- 下游（承载者）：[GameEntity](../GameEntity/) 通过 `GetScriptComponents` 收集并驱动这些行为；[Scene](../Scene/) 持有实体与组件。
- 相关阅读：[native-interop 架构说明](../../../architecture/native-interop/) 解释 `DotNetObject` 与 `NativeObject` 的区别。
- 对象模型：[NativeObject](../NativeObject/) 是原生侧配对类的根基。

- 父级：[engine API](../)
- 同级：[ScriptComponent](../ScriptComponent/) · [GameEntity](../GameEntity/) · [Scene](../Scene/)
