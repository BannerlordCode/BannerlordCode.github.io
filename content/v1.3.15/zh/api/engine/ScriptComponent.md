---
title: "ScriptComponent"
description: "ScriptComponent 是原生 rglScript_component 的托管包装，作为挂在 GameEntity 上的脚本组件基类，保存组件名等原生侧状态。"
---
# ScriptComponent

**Namespace:** `TaleWorlds.Engine`  
**Module:** `TaleWorlds.Engine`  
**类型：** `public abstract class ScriptComponent : NativeObject`  
**Base:** `NativeObject`  
**Source:** `TaleWorlds.Engine/ScriptComponent.cs`

## 概述

`ScriptComponent` 是场景/实体上「脚本组件」在托管侧的基类，它通过 `[EngineClass("rglScript_component")]` 绑定到原生脚本组件类型。它本身是一个很薄的 `NativeObject` 包装：除了从基类继承的指针映射外，公开 API 只有 `GetName()` 这一项，用于取回该组件在场景编辑器里配置的名字。真正的逻辑几乎都放在它的派生类 `ManagedScriptComponent`，以及与之配对的 `ScriptComponentBehavior`（C# 侧逻辑）上。可以把 `ScriptComponent` 理解成「原生脚本实例的句柄」——你用它读原生状态、拿名字，但行为写在别处。

## 心智模型

`ScriptComponent` 是原生脚本组件 `rglScript_component` 在托管侧的薄包装，本身几乎不持有逻辑，只通过 `EngineApplicationInterface.IScriptComponent` 把调用转给原生层。引擎在加载场景中的脚本组件时创建它的派生实例（最常见的是 `ManagedScriptComponent`），并通过 `ScriptComponentBehavior` 把 C# 逻辑挂上去。mod 日常很少直接 `new` 它，而是通过 `GameEntity.GetScriptComponents` 取出已挂载的实例、读取 `GetName` 等信息，或在自己的 `ScriptComponentBehavior` 里通过 `ScriptComponent` 属性访问原生组件。它属于「资源/组件对象」而非「服务」，生命周期跟随所属实体，实体被销毁后句柄即失效。

## 关键成员

| 成员 | 作用 |
| --- | --- |
| `GetName()` | 经 `IScriptComponent.GetName` 取回该脚本组件在场景编辑器中的名字 |
| `[EngineClass("rglScript_component")]` | 类上的特性，将托管类型绑定到原生脚本组件类型 |
| `ScriptComponent(UIntPtr)` | 内部构造，由原生指针经基类 `Construct` 建立托管映射，mod 不可调用 |
| 继承自 `NativeObject` 的 `Pointer` | 通过基类持有原生对象指针，是所有原生转发的根基 |

## 真实示例

场景里的脚本组件通常通过 `ScriptComponentBehavior` 访问。下面在行为内部遍历同一实体上的所有脚本组件，并打印它们的名字——`GetName()` 是 `ScriptComponent` 上唯一稳定的公开方法：

```csharp
foreach (ScriptComponentBehavior behavior in entity.GetScriptComponents())
{
    ScriptComponent component = behavior.ScriptComponent;
    MBDebug.Print("挂载的脚本组件: " + component.GetName());
}
```

注意 `behavior.ScriptComponent` 的类型是 `ManagedScriptComponent`（本职派生自 `ScriptComponent`），所以可以直接当作 `ScriptComponent` 使用。

## 风险与崩溃边界

- **句柄跟随实体生命周期。** 实体被移除后，`ScriptComponent` 的原生指针失效，继续调用 `GetName()` 会访问已释放原生对象。
- **不要强引用阻止回收。** 行为侧用的是 `WeakNativeObjectReference` 持有组件；在 mod 代码里把 `ScriptComponent` 存进长生命周期集合会拖住原生回收。
- **它是抽象类。** 不能直接 `new ScriptComponent()`，应使用引擎创建的具体派生（`ManagedScriptComponent`）或从实体取得实例。

## 跨版本提示

1.3.15 与 1.4.5 的 `ScriptComponent` 公开面完全一致：仅 `GetName()` 一个方法，基类与 `EngineClass` 绑定均未变。跨版本 mod 可放心依赖此 API。

## 依赖关系

- 上游：[EngineApplicationInterface](../EngineApplicationInterface/) 提供 `IScriptComponent` 原生实现；[NativeObject](../NativeObject/) 是对象模型根基。
- 下游（配对逻辑）：[ScriptComponentBehavior](../ScriptComponentBehavior/) 通过 `ScriptComponent` 属性持有本组件；[GameEntity](../GameEntity/) 通过 `GetScriptComponents` 暴露挂载的组件。
- 相关阅读：[native-interop 架构说明](../../../architecture/native-interop/) 解释 `EngineClass` 与 `NativeObject` 的绑定机制。
- 场景容器：[Scene](../Scene/) 持有所有带脚本组件的实体。

- 父级：[engine API](../)
- 同级：[ScriptComponentBehavior](../ScriptComponentBehavior/) · [GameEntity](../GameEntity/) · [NativeObject](../NativeObject/)
