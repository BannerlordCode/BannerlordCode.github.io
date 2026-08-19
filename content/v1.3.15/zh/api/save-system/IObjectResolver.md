---
title: "IObjectResolver"
description: "对象引用解析器契约：加载旧档时，对“无法直接按对象图还原”的引用（如靠字符串 id 寻址的 MBObjectBase）做特殊处理；CheckIfRequiresAdvancedResolving 判定是否需要晚初始化解析，ResolveObject / AdvancedResolveObject 完成映射。"
---

# IObjectResolver

**命名空间：** `TaleWorlds.SaveSystem.Resolvers`  
**模块：** `TaleWorlds.SaveSystem`  
**类型：** `public interface IObjectResolver`  
**基类：** —  
**源文件：** `TaleWorlds.SaveSystem/Resolvers/IObjectResolver.cs`

## 概述

`IObjectResolver` 是保存系统用于**加载期对象引用解析**的钩子，处理那些“不能简单地按对象图指针还原”的引用。它有三个方法：`CheckIfRequiresAdvancedResolving(object originalObject)` 先判定某个对象是否需要高级（晚初始化）解析；`ResolveObject(object originalObject)` 做基础解析，返回应替换成的对象；`AdvancedResolveObject(object originalObject, MetaData metaData, ObjectLoadData objectLoadData)` 则在加载后期、已具备 [MetaData](../MetaData) 与 [ObjectLoadData](../ObjectLoadData) 上下文时完成更复杂的映射（例如把存档里记的字符串 id，经 [MBObjectManager](../../campaign-ext/MBObjectManager) 查回实际的 `MBObjectBase` 实例）。它常用于原生对象（英雄、家族、物品等）以及 mod 自定义的可寻址对象——这些对象通常不在存档对象图内，而是靠 id 在加载时重新取回。

## 心智模型

- **是什么：** 加载期的“引用修复器”，把存档里记的寻址信息（如字符串 id）重新绑回运行时的真实对象实例。
- **何时用：** 你有一个 mod 数据成员引用了**不在存档对象图内**的对象（典型如 `Hero`、`ItemObject` 这类由 [MBObjectManager](../../campaign-ext/MBObjectManager) 管理的 `MBObjectBase`），并且希望旧档加载后能正确取回该实例时，应提供 `IObjectResolver`。
- **何时不要用：** 不要把它当“运行时任意换对象”的通用机制——它只在加载旧档、且 `CheckIfRequiresAdvancedResolving` 命中时参与。普通的可保存对象引用（在对象图内的）由保存系统自动按引用身份还原，无需 resolver。也不要在 `ResolveObject` / `AdvancedResolveObject` 里访问尚未加载完成的依赖，晚初始化阶段要依赖 [ObjectLoadData](../ObjectLoadData) 提供的上下文。
- **谁创建/持有：** 由 definer / 加载逻辑注册，在 [SaveManager](../SaveManager) 的加载侧按对象咨询；高级解析发生在晚初始化阶段，配合 [LoadCallbackInitializator](../LoadCallbackInitializator) 与 [MBObjectManager](../../campaign-ext/MBObjectManager)。
- **处在哪一层：** 处于“加载兼容/引用修复层”——在 [LoadContext](../LoadContext) / [ArchiveDeserializer](../ArchiveDeserializer) 还原对象图之上、[MBObjectManager](../../campaign-ext/MBObjectManager) 寻址之下。

## 何时使用 / 何时不要使用

**使用（实践层面）：** 某成员保存的是 `Hero` 的 stringId，旧档加载时需重新从 [MBObjectManager](../../campaign-ext/MBObjectManager) 取回真实 `Hero` → 提供 resolver，在 `AdvancedResolveObject` 里查回。

**不要使用：**

- 不要对“已在对象图内的普通可保存对象”用 resolver：它们会被自动还原，强行干预反而破坏引用去重。
- 不要在 `ResolveObject` 阶段假设 [MBObjectManager](../../campaign-ext/MBObjectManager) 已就绪：需要完整上下文的映射应放在 `AdvancedResolveObject`。

## 依赖图

- 加载数据：[ObjectLoadData](../ObjectLoadData) 与 [MetaData](../MetaData) 是 `AdvancedResolveObject` 的上下文来源，提供当前加载状态与版本信息。
- 对象寻址：[MBObjectManager](../../campaign-ext/MBObjectManager) 是 `MBObjectBase` 实例的实际取回方，常与 `AdvancedResolveObject` 配合。
- 加载流程：[SaveManager](../SaveManager) 在加载旧档时咨询 resolver；[LoadContext](../LoadContext) / [ArchiveDeserializer](../ArchiveDeserializer) 据结果绑定引用。
- 类型定义：[SaveableTypeDefiner](../SaveableTypeDefiner) 提供注册入口，把 resolver 挂到对应类型。

## 风险

- **`CheckIfRequiresAdvancedResolving` 误判** → 该解析的没解析，引用悬空（空引用）；不该解析的被解析，破坏对象图去重。
- **`AdvancedResolveObject` 返回 null / 错误实例** → 引用绑到错误对象，逻辑错乱甚至崩溃。
- **晚初始化顺序错误** → 在依赖对象就绪前访问，产生顺序相关的空引用；应把取回放在明确的 `AfterLoad` / 加载完成后。
- **跨版本 id 方案变化** → 旧档记的 stringId 在新版 [MBObjectManager](../../campaign-ext/MBObjectManager) 里查不到，取回失败。

## 成员说明

### `bool CheckIfRequiresAdvancedResolving(object originalObject)`

判定 `originalObject` 是否需要高级（晚初始化）解析。返回 `true` 才会进入 `AdvancedResolveObject`；否则可走普通 `ResolveObject`。

### `object ResolveObject(object originalObject)`

做基础解析，返回应替换成的对象实例。适用于无需完整加载上下文即可确定的映射。

### `object AdvancedResolveObject(object originalObject, MetaData metaData, ObjectLoadData objectLoadData)`

在加载后期、具备 [MetaData](../MetaData) 与 [ObjectLoadData](../ObjectLoadData) 时完成复杂映射（如按 stringId 经 [MBObjectManager](../../campaign-ext/MBObjectManager) 取回 `MBObjectBase`）。返回最终应绑定的实例。

## 示例

模组侧在加载旧档时由引擎自动咨询 resolver；而**保存**仍是统一入口——确保被引用的对象（如 `Hero`）可由 [MBObjectManager](../../campaign-ext/MBObjectManager) 在加载时取回：

```csharp
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Game.Current, metaData, saveName, driver);
```

一个对象 resolver 的典型骨架（加载旧档时由引擎调用，本身不含 `SaveManager` 调用）：

```csharp
public class MyModObjectResolver : IObjectResolver
{
    public bool CheckIfRequiresAdvancedResolving(object originalObject) => originalObject is string;
    public object ResolveObject(object originalObject) => originalObject;
    public object AdvancedResolveObject(object originalObject, MetaData metaData, ObjectLoadData data)
    {
        string id = (string)originalObject;
        return MBObjectManager.Instance.GetObject<Hero>(id); // 按 id 取回真实实例
    }
}
```

> 注意：resolver 只在加载旧档且 `CheckIfRequiresAdvancedResolving` 命中时生效；`AdvancedResolveObject` 返回的对象必须能在当前加载状态中正确取回。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[ObjectLoadData](../ObjectLoadData) · [MetaData](../MetaData) · [MBObjectManager](../../campaign-ext/MBObjectManager) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [LoadContext](../LoadContext) · [ArchiveDeserializer](../ArchiveDeserializer) · [SaveManager](../SaveManager)
