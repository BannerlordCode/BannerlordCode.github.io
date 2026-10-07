---
title: "LoadCallbackInitializator"
description: "读档的两个回调趟：按方法参数个数分三档派发初始化回调与延迟初始化回调，签名里带 ObjectLoadData 的会被额外重读一次该对象的字节。"
---

# LoadCallbackInitializator

**Namespace:** `TaleWorlds.SaveSystem.Load`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `internal class LoadCallbackInitializator`
**Base:** 无
**File:** `TaleWorlds.SaveSystem.Load/LoadCallbackInitializator.cs`

## 概述

读档的数据全部填完之后，还要跑一批写在类型定义里的初始化方法。[LoadContext](../LoadContext) 在 `loadAsLateInitialize == false` 时就地跑（`LoadContext.cs:238-240`），为 true 时把本类装进 [LoadResult](../LoadResult) 交给上层择机调用（`LoadContext.cs:251`）。它只有两个公开方法：`InitializeObjects()` 派发该类型的**初始化回调**，`AfterInitializeObjects()` 派发**延迟初始化回调**。两者结构几乎逐行相同，唯一差别是读哪个回调集合（`:37` 对 `:75`）。回调方法用 `MethodInfo.Invoke` 调用，**传入什么完全由你方法的参数个数决定**。

## 心智模型

把它想成**点名册**：读档全场的家具都摆好了，主持人挨个对象查名册，谁的签名是三种形态之一就按对应形态点名。推论有四条：

1. **你的方法签名决定你收到什么。** 三档派发：两个参数且第二个是 `ObjectLoadData`（`:45`）→ 传 `(MetaData, ObjectLoadData)`；一个参数（`:50`）→ 传 `(MetaData)`；其余（`:54`）→ `Invoke(target, null)` 不传参。**签名写错不是编译错误，是运行时行为错误**——方法会被正常调用，只是拿不到你以为能拿到的东西。
2. **带 `ObjectLoadData` 的签名会让该对象被重读一次。** `GetObjectLoadData`（`:103-110`）在缓存未命中时调 `LoadContext.CreateLoadData(_loadData, i, objectHeaderLoadData)`（`:107`）——**这是一个完整的反序列化**，第一次触发时把该对象的字节再读一遍。缓存按对象下标存，所以**同一个对象只会被重读一次**，两次回调趟共享这份缓存。
3. **`AfterInitializeObjects` 结束时会清空缓存。** `:99` 的 `_objectLoadDatas.Clear()`。所以**在延迟回调趟之后再想拿 `ObjectLoadData`，会触发又一次重读**（缓存已被清）。反过来，如果你需要在两个趟之间复用同一个实例，就只能靠 `ObjectLoadData` 自己缓存。
4. **两趟都会跳过解析失败的对象。** 两个循环开头都是 `if (objectHeaderLoadData.Target == null) continue;`（`:33`、`:71`）——**那个空壳不存在（`TypeDefinition` 解析成 null）的对象，收不到任何回调**。回调集合本身为 null 也跳过（`:38`、`:76`，用的是 `?.`）。

## 如何使用

### 怎么拿到它

**mod 拿不到实例，但这就是你的回调被调用的地方。** 两个正规入口：

- 自动：[LoadContext](../LoadContext) 的 `Load` 在 `loadAsLateInitialize == false` 时就地建并跑（`LoadContext.cs:238-240`）。
- 手动：`LoadContext.CreateLoadCallbackInitializator(loadData)`（`LoadContext.cs:251`），或从 [LoadResult](../LoadResult) 里取——[SaveManager](../SaveManager) 在 `loadAsLateInitialize` 为 true 时会这么装。

**你要做的是写对方法的签名**，让它被收集进 `TypeDefinition.InitializationCallbacks` 或 `LateInitializationCallbacks`（收集发生在定义构建期，见 [DefinitionContext](../DefinitionContext) 的 `CollectInitializationCallbacks`）。

### 最小可运行片段

```csharp
// 三档派发决定你的初始化方法收到什么（LoadCallbackInitializator.cs:45/:50/:54）
using TaleWorlds.SaveSystem;
using TaleWorlds.SaveSystem.Load;

// 形态 1：无参 —— 不传任何东西
public void AfterLoaded() { }

// 形态 2：只带 MetaData
public void AfterLoaded(MetaData metaData) { }

// 形态 3：带 MetaData + 本对象的加载数据（会额外重读该对象字节一次）
public void AfterLoaded(MetaData metaData, ObjectLoadData objectLoadData) { }

Debug.Print("签名是三选一，决定 Invoke 传什么；写错不报编译错，只是拿不到", 0);
```

### 用它最容易踩的一条

**把初始化写成「两个参数但第二个不是 `ObjectLoadData`」，它会落进 `else if (parameters.Length == 1)` 之外的最后那档，被 `Invoke(target, null)` 调用——而你的方法需要两个参数，于是抛 `TargetParameterCountException`。** 判据在 `:45`：`parameters.Length > 1 && parameters[1].ParameterType == typeof(ObjectLoadData)`。所以**只要你的方法有两个及以上参数，第一个之后必须正好是 `ObjectLoadData`**，否则要么参数不够崩，要么参数多了也崩。另外注意两趟读的是**不同的集合**（`:37` 的 `InitializationCallbacks` 与 `:75` 的 `LateInitializationCallbacks`），放错集合 = 根本不会被调用，且没有任何提示。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_loadData` | `private LoadData _loadData` | 读档原始数据，构造器注入（`:20`）。用途只有两个：取 `_loadData.MetaData` 传给回调（`:48`、`:52`），以及 `GetObjectLoadData` 里重新反序列化（`:107`）。 |
| `_objectHeaderLoadDatas` | `private ObjectHeaderLoadData[] _objectHeaderLoadDatas` | 全部对象头，构造器注入（`:21`）。两个趟都按 `_objectCount` 下标遍历它。 |
| `_objectCount` | `private int _objectCount` | 对象总数（`:22`），两个趟的循环上界（`:30`、`:68`）。与数组长度不一定相等（[LoadContext](../LoadContext) 里容器头在另一个数组里）。 |
| `_objectLoadDatas` | `private Dictionary<int, ObjectLoadData> _objectLoadDatas` | 按对象下标缓存 `ObjectLoadData`，构造时建空字典（`:23`）。**只在签名带 `ObjectLoadData` 时才会被填充**（`:108`），并在 `AfterInitializeObjects` 末尾被 `Clear()`（`:99`）。 |
| 构造器 | `public LoadCallbackInitializator(LoadData loadData, ObjectHeaderLoadData[] objectHeaderLoadDatas, int objectCount)` | `:18-24`。三样都直接存下，**不做校验**（数组与 count 不匹配时循环会越界）。唯一调用点是 [LoadContext](../LoadContext) 的 `CreateLoadCallbackInitializator`。 |
| `InitializeObjects` | `public void InitializeObjects()` | `:26-62`。读 `TypeDefinition?.InitializationCallbacks`（`:37`），跳过 `Target == null`（`:33`）与回调集合为 null（`:38`），然后按 `:45`/`:50`/`:54` 三档 `Invoke`。结束 `GC.Collect()`（`:61`）。 |
| `AfterInitializeObjects` | `public void AfterInitializeObjects()` | `:64-101`。**结构与上一个方法逐行相同**，只把 `:37` 换成读 `LateInitializationCallbacks`（`:75`），并且结束后多一步 `_objectLoadDatas.Clear()`（`:99`），再 `GC.Collect()`（`:100`）。 |
| `GetObjectLoadData` | `private ObjectLoadData GetObjectLoadData(ObjectHeaderLoadData objectHeaderLoadData, int i)` | `:103-110`。缓存未命中时 `LoadContext.CreateLoadData(_loadData, i, objectHeaderLoadData)`（`:107`）——**一次完整的重新反序列化**，然后存进缓存（`:108`）。两个趟共享这份缓存，所以同一对象最多被重读一次（直到 `:99` 清空）。 |

## 真实示例

三档派发的全文（`TaleWorlds.SaveSystem.Load/LoadCallbackInitializator.cs:42-58`）：

```csharp
foreach (MethodInfo item in enumerable)
{
    ParameterInfo[] parameters = item.GetParameters();
    if (parameters.Length > 1 && parameters[1].ParameterType == typeof(ObjectLoadData))
    {
        ObjectLoadData objectLoadData = GetObjectLoadData(objectHeaderLoadData, i);   // 触发一次重读
        item.Invoke(objectHeaderLoadData.Target, new object[2] { _loadData.MetaData, objectLoadData });
    }
    else if (parameters.Length == 1)
    {
        item.Invoke(objectHeaderLoadData.Target, new object[1] { _loadData.MetaData });
    }
    else
    {
        item.Invoke(objectHeaderLoadData.Target, null);
    }
}
```

重读与缓存（`:103-110`）：

```csharp
private ObjectLoadData GetObjectLoadData(ObjectHeaderLoadData objectHeaderLoadData, int i)
{
    if (!_objectLoadDatas.TryGetValue(i, out var value))
    {
        value = LoadContext.CreateLoadData(_loadData, i, objectHeaderLoadData);   // 完整反序列化一次
        _objectLoadDatas[i] = value;
    }
    return value;
}
// AfterInitializeObjects 末尾会 _objectLoadDatas.Clear()（:99）——之后再取会再重读一次
```

mod 视角的对照实验：

```csharp
// 三个签名对应三档：
//   void AfterLoaded()                             → Invoke(target, null)                  :56
//   void AfterLoaded(MetaData m)                   → Invoke(target, new object[1])         :52
//   void AfterLoaded(MetaData m, ObjectLoadData o) → Invoke(target, new object[2]) + 重读   :48
// 写成 (MetaData, SomeOtherType) → 落到最后的 null 档 → TargetParameterCountException

// 另外：把方法放进错误的集合（Initialization vs LateInitialization）= 永远不被调用，无提示
Debug.Print("放错集合与方法签名写错，是这个回调机制里两种静默/半静默的失败", 0);
```

## 依赖关系

- 调度者：[LoadContext](../LoadContext)（`Load` 内就地调用，或经 `CreateLoadCallbackInitializator` 交给上层）与 [SaveManager](../SaveManager)（`loadAsLateInitialize` 分支）
- 结果载体：[LoadResult](../LoadResult)、[LoadData](../LoadData)、[MetaData](../MetaData)
- 遍历对象：[ObjectHeaderLoadData](../ObjectHeaderLoadData)（`Target` 为 null 的被跳过，`TypeDefinition` 提供回调集合）
- 载荷：[ObjectLoadData](../ObjectLoadData)（经 `LoadContext.CreateLoadData` 现场反序列化）
- 回调来源：[DefinitionContext](../DefinitionContext) 的 `CollectInitializationCallbacks`，以及 [LoadInitializationCallback](../LoadInitializationCallback) 与 [LateLoadInitializationCallback](../LateLoadInitializationCallback) 两个委托形状
- 写盘侧对偶：[ObjectSaveData](../ObjectSaveData) 与 [ContainerSaveData](../ContainerSaveData)（数据填完才轮到回调）
- 体系全貌：../../../architecture/save-system