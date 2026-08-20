---
title: "LoadCallbackInitializator"
description: "加载阶段派发器：在对象重建后依次触发早/晚加载初始化回调。"
---

# LoadCallbackInitializator

> **一句话职责：** 读档时负责把每个已重建对象的 `[LoadInitializationCallback]` 与 `[LateLoadInitializationCallback]` 方法按阶段反射调用起来。

**命名空间：** `TaleWorlds.SaveSystem.Load`
**模块：** SaveSystem
**类型：** `class LoadCallbackInitializator`
**源文件路径：** `bannerlord-1.3.15/TaleWorlds.SaveSystem/Load/LoadCallbackInitializator.cs`

## 概述
加载分多个阶段，对象实例化和字段填充完成后，还需要跑 modder 用特性标记的初始化方法。`LoadCallbackInitializator` 拿到 `LoadData`、`ObjectHeaderLoadData[]` 与对象总数后，遍历每个已重建的对象，从它的 `TypeDefinition` 里取出 `InitializationCallbacks` / `LateInitializationCallbacks`，用反射 `Invoke` 对应方法。它把“加载完成”与“用户钩子”这两件事连接起来，是加载管线里回调执行的总调度。

## 心智模型
把它想成“迎新报到的老师”：新生（对象）已经填好登记表（字段），老师按名单逐个点名，叫出贴了 `LoadInitializationCallback` 标签的同学先做早操（早期初始化），等全体到齐后再叫贴 `LateLoadInitializationCallback` 的同学开班会（晚期初始化）。它会根据方法参数个数决定传 `MetaData`、还是 `MetaData`+`ObjectLoadData`、还是不传。它是 `internal` 的加载内部件，由加载上下文在重建对象后创建并调用，modder 不会直接碰它。

## 何时用 / 何时不要用
这是 `internal` 类型，模组代码不要实例化或调用它。想在读档时执行自定义逻辑，只需在方法上贴 `LoadInitializationCallback` 或 `LateLoadInitializationCallback` 特性即可，加载系统会自动经此类派发。只有改引擎加载内核时才需要实现自己的回调派发逻辑。

## 依赖图
- 上游：[SaveManager](../SaveManager)、[LoadInitializationCallback](../LoadInitializationCallback)、[LateLoadInitializationCallback](../LateLoadInitializationCallback)
- 下游：[LoadError](../LoadError)、[GameData](../GameData)
- 相关类型/阶段：[TypeDefinition](../TypeDefinition)、[ContainerLoadData](../ContainerLoadData)

## 风险段
- 回调签名受限：只支持无参、`MetaData`、或 `MetaData`+`ObjectLoadData` 三种；其它签名会被静默跳过。
- 反射调用无保护：回调里抛异常会直接沿 `Invoke` 上抛，可能让整次加载失败并转为 `LoadError`。
- 顺序不保证：同类内多个回调之间没有定义执行顺序，不要相互依赖。
- 性能：`InitializeObjects` 与 `AfterInitializeObjects` 末尾都调用 `GC.Collect()`，大规模存档时回调阶段会有明显 GC 停顿。

## 成员说明
- 构造函数 `LoadCallbackInitializator(LoadData loadData, ObjectHeaderLoadData[] objectHeaderLoadDatas, int objectCount)`：持有加载数据、对象头数组与总数，并准备 `ObjectLoadData` 缓存字典。
- `InitializeObjects()`：遍历对象头，对每个 `Target` 非空的对象的 `InitializationCallbacks` 反射调用（早加载阶段），随后 `GC.Collect()`。
- `AfterInitializeObjects()`：再次遍历，调用 `LateInitializationCallbacks`（晚加载阶段），清空 `ObjectLoadData` 缓存并 `GC.Collect()`。
- 私有 `GetObjectLoadData(...)`：按需用 `LoadContext.CreateLoadData` 构造并缓存 `ObjectLoadData`，供签名带 `ObjectLoadData` 参数的回调使用。

## 示例
```csharp
ISaveDriver driver = new InMemDriver();
LoadResult result = SaveManager.Load("mySlot", driver);
bool ok = result.Success;
Game.Current.OnLoaded();
```

## 导航
- ↑ 父级：[save-system 索引](../)
- ↔ 兄弟：[LoadInitializationCallback](../LoadInitializationCallback)、[LateLoadInitializationCallback](../LateLoadInitializationCallback)
- 架构：[存档系统架构](../../../architecture/save-system)
