---
title: "EngineApplicationInterface"
description: "TaleWorlds.Engine 的 internal 托管/原生桥接层：以一组静态 I* 接口把托管调用转发到 C++ 引擎，由 SetObjects 在启动时注入。"
---
# EngineApplicationInterface

**Namespace:** `TaleWorlds.Engine`  
**Module:** `TaleWorlds.Engine`  
**类型：** `internal class EngineApplicationInterface`  
**Base:** `System.Object`  
**Source:** `TaleWorlds.Engine/EngineApplicationInterface.cs`

## 概述

`EngineApplicationInterface` 是整套引擎里托管代码与原生 C++ 实现之间唯一的官方桥接层，它本身不实现任何业务，只持有几十个原生接口实例（如 `IPath`、`IShader`、`ISoundManager`、`IDebug`）。游戏启动时，原生层把所有接口实现放进一个字典并调用 `SetObjects` 注入；之后每一个托管包装类——`MBDebug`、`SoundManager`、`GameEntity`、`Scene`、各类 `ScriptComponent`——都通过这里暴露的静态字段把方法调用转发到对应的原生实现。理解这一层，就理解了「为什么 managed 代码能驱动引擎」：所有引擎能力最终都从这扇门进出。

mod 真正要读的是它列出的接口清单与字段名，因为它们揭示了每个子系统在原生侧的名字；但 mod 几乎从不直接引用这个类，理由见心智模型。

## 心智模型

`EngineApplicationInterface` 是托管代码与原生 C++ 引擎之间的唯一官方桥接层：游戏启动时，原生层把所有 `IPath`、`IShader`、`ISoundManager`、`IDebug` 等接口实现塞进一个字典，再调用 `SetObjects` 注入；之后任意托管包装类（`MBDebug`、`SoundManager`、`GameEntity` 等）都通过这里暴露的静态字段把调用转发下去。mod 几乎永远不要直接引用它——它是 `internal` 的，编译期对模组不可见，而且正确的入口是各高层包装或 `SubModule` 的生命周期钩子。把它想象成「发动机舱里的主电缆排」，你只该碰露在外面的开关（高层 API），而不是去拧舱内的接线柱。

## 关键成员

| 成员 | 作用 |
| --- | --- |
| `SetObjects(Dictionary<string, object>)` | 引擎启动时注入全部原生接口实现，是整个桥接层的初始化入口，只应调用一次 |
| `GetObject<T>()` | 按类型全名从字典取出已注册接口，找不到时返回 `default(T)` 而非抛异常 |
| `ISoundManager` / `IDebug` 等静态字段 | 各子系统的原生接口实例，托管包装类通过它们转发调用 |
| `_objects` | 保存类型全名到接口实例的字典，是桥接层的中枢，由 `SetObjects` 填充 |

## 真实示例

下面的代码演示 mod 应当如何——以及不应当如何——使用引擎能力。普通 mod 调用高层包装，`EngineApplicationInterface` 那行只是展示引擎内部在同一时刻做的转发，mod 编译不过也绝不要写：

```csharp
// mod 通过高层包装使用引擎能力，绝不直接调用 EngineApplicationInterface
MBDebug.ShowMessageBox("关卡加载完成", "提示", 0u);
SoundManager.Reset();
MBDebug.Print("资源回收完成", 0, Debug.DebugColor.White);
```

当你在 `MBDebug` 或 `SoundManager` 文档里看到方法体只有一行 `EngineApplicationInterface.Ixxx.Method(...)`，那就是本桥接层在起作用：托管侧只是一层极薄的转发壳。

## 风险与崩溃边界

- **永远不要直接调用。** 该类是 `internal`，模组编译期不可见；强行反射访问会在不同版本或不同构建配置下因接口集合变化而 `NullReferenceException`。
- **`SetObjects` 是一次性初始化。** 它在引擎引导早期由原生层调用；任何在它之前访问静态接口字段的代码都会拿到 `null`。
- **接口集合随版本变化。** 1.3.15 与 1.4.5 的本文件接口清单一致，但未来版本可能增删接口；依赖某个具体 `I*` 字段名是不稳定的。
- **不要缓存原生指针越过实体生命周期。** 桥接层转发依赖对象仍然存活；实体被移除后继续调用会触发原生侧崩溃。

## 跨版本提示

1.3.15 与 1.4.5 中 `EngineApplicationInterface` 暴露的静态 `I*` 接口集合完全相同（均为 43 个，从 `IPath` 到 `IManagedMeshEditOperations`），`SetObjects` 与 `GetObject<T>` 的语义也未变。跨版本 mod 不应假设任何接口字段名或字典键稳定，仍应只走高层包装 API。

## 依赖关系

- 上游（接口来源）：被注入的实现来自原生引擎，经 [native-interop 架构说明](../../../architecture/native-interop/) 描述。
- 下游（典型转发方）：[MBDebug](../MBDebug/) 经 `IDebug` 转发，[SoundManager](../SoundManager/) 经 `ISoundManager` 转发，[ScriptComponent](../ScriptComponent/) 经 `IScriptComponent` 转发。
- 相关阅读：[SDK 总览](../../../architecture/sdk-overview/) 解释托管/原生分层，[崩溃边界](../../../architecture/crash-boundaries/) 解释桥接失败的后果。
- 更底层的对象模型：[NativeObject](../NativeObject/) 是所有原生包装类的基类。

- 父级：[engine API](../)
- 同级：[MBDebug](../MBDebug/) · [SoundManager](../SoundManager/) · [ScriptComponent](../ScriptComponent/) · [ScriptComponentBehavior](../ScriptComponentBehavior/)
