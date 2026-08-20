---
title: "LoadInitializationCallback"
description: "标记“加载初始化”方法的特性：在对象字段填好、引用打通前执行的早期装配钩子。"
---

# LoadInitializationCallback

> **一句话职责：** 贴在方法上的特性，告诉加载系统在对象刚被重建、字段填好但跨对象引用尚未完全连通时，调用它做早期装配。

**命名空间：** `TaleWorlds.SaveSystem`
**模块：** SaveSystem
**类型：** `class LoadInitializationCallback : Attribute`
**源文件路径：** `bannerlord-1.3.15/TaleWorlds.SaveSystem/LoadInitializationCallback.cs`

## 概述
读档时对象先被实例化、字段被填充，然后才把对象之间的引用连起来。`LoadInitializationCallback` 标记的方法属于“早期”那一波：在 `LoadCallbackInitializator.InitializeObjects` 阶段被调用，此时本对象的字段已就位，但还不应假设其它对象都已完整。它适合做只依赖自身数据、不依赖外部完整状态的初始化。

## 心智模型
把它想成“新生报到第一步”：学生（对象）刚领完自己的课本（字段），还没和全班认识（引用未连通），老师（加载系统）就先点名让贴了此标签的同学做点只关乎自己的事。`LoadCallbackInitializator` 通过类型定义里的 `InitializationCallbacks` 列表反射 `Invoke` 它。它和 `LateLoadInitializationCallback` 是“早/晚”两班岗——早班在引用未全时跑，晚班在全部连通后跑。modder 只需贴特性，无需手动注册。

## 何时用 / 何时不要用
当初始化只依赖对象自身已填好的字段、且不需要等待其它对象就位时，用 `LoadInitializationCallback`。如果逻辑必须等所有对象与引用都就绪（例如重新订阅、绑定管理器、跨对象计算），应改用 `LateLoadInitializationCallback`。与运行期无关的初始化不要放进加载钩子，避免每次读档重复执行或影响加载性能。

## 依赖图
- 上游：[LoadCallbackInitializator](../LoadCallbackInitializator)、[LateLoadInitializationCallback](../LateLoadInitializationCallback)
- 下游：[SaveManager](../SaveManager)、[GameData](../GameData)
- 相关类型/阶段：[TypeDefinition](../TypeDefinition)、[LoadError](../LoadError)

## 风险段
- 方法签名限制：仅支持无参、`MetaData`、或 `MetaData`+`ObjectLoadData` 三种，其它参数个数会被跳过而不执行。
- 时序约束：此时其它对象的引用可能还没连通，早加载钩子里访问外部对象容易拿到 null 或残缺状态。
- 异常上抛：钩子抛异常会沿加载流程上抛，可能让整次读档失败并转为 `LoadError`。

## 成员说明
- 该特性本身无任何成员（空 `Attribute`），仅作标记。`AttributeUsage(AttributeTargets.Method)` 限制它只能贴在方法上。是否生效取决于加载系统对方法签名的识别与 `Invoke`。

## 示例
```csharp
public class MyCampaignBehavior
{
    [LoadInitializationCallback]
    private void OnLoad(MetaData metaData) => ResetTransientState();
}
ISaveDriver driver = new InMemDriver();
LoadResult result = SaveManager.Load("mySlot", driver);
bool loaded = result.Success;
```

## 导航
- ↑ 父级：[save-system 索引](../)
- ↔ 兄弟：[LateLoadInitializationCallback](../LateLoadInitializationCallback)、[LoadCallbackInitializator](../LoadCallbackInitializator)
- 架构：[存档系统架构](../../../architecture/save-system)
