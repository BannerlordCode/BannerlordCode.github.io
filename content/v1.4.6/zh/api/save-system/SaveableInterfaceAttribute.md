---
title: "SaveableInterfaceAttribute"
description: "标在接口上的存档身份声明特性，让存档系统知道这个接口可以作为对象身份被寻址；实际登记靠 SaveableTypeDefiner.AddInterfaceDefinition。"
---
# SaveableInterfaceAttribute

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class SaveableInterfaceAttribute : Attribute`
**Source:** `TaleWorlds.SaveSystem/SaveableInterfaceAttribute.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`SaveableInterfaceAttribute` 是 `SaveableRootClassAttribute` 的**接口版孪生体**：形状完全一致（继承 `System.Attribute`、携带一个 `SaveId`、构造器把它写进属性），唯一的差别是 `AttributeUsage` 限定为 `AttributeTargets.Interface`。它声明「这个接口是存档可寻址的身份」。

它解决的问题是：存档里引用 `IFaction` 这样的接口字段时，写入的不是「接口」而是一个对象 id。要能把 id 反解成接口类型，接口本身必须在类型表里有一条定义。`TaleWorlds.CampaignSystem/IFaction.cs:13` 就是全仓库唯一一处标注 `[SaveableInterface(22001)]`，而对应的登记在 `TaleWorlds.CampaignSystem/SaveableCampaignTypeDefiner.cs:364` 的 `base.AddInterfaceDefinition(typeof(IFaction), 3001);`。

与根类特性同样，**标注不产生登记**。区别在于：`AddInterfaceDefinition` 的签名是 `(Type type, int saveId)`，**没有 resolver 参数**（`TaleWorlds.SaveSystem/SaveableTypeDefiner.cs:144`）——接口定义只承载「接口类型 ↔ 编号」的映射，不承载对象解析策略。

## 心智模型

接口在存档系统里扮演的是「**身份标签**」，不是「可构造的类型」。它和类/结构体定义的三点差别值得记牢：

1. **没有 resolver。** `AddInterfaceDefinition(Type, int)` 不接受 `IObjectResolver`，因为接口不能 `new`。接口定义只回答「编号 N 对应哪个接口类型」，真正的实例由实现该接口的具体类的定义负责。
2. **双向可见。** 定义表同时按 `Type` 和按 `SaveId` 建索引，所以 `IFaction` 既能从类型查到编号（写入时），也能从编号查回类型（读取旧档时）。
3. **是「注册」而不是「扫描」。** 不存在「实现了某接口就自动进表」的机制。你必须在某个 `SaveableTypeDefiner` 子类的 `DefineInterfaceTypes()` 里显式调 `AddInterfaceDefinition`。

所以遇到「旧档读回来时接口字段变成了 null / 类型不匹配」这类问题时，先查的不是接口上的特性，而是**对应的 definer 里那一行 `AddInterfaceDefinition` 是否存在、编号是否被改过**。

## 怎么用

### 怎么拿到

和根类特性一样，它是反射元数据。官方没有读取点——`SaveableInterface` 这个名字在 1.4.6 全树里只出现在 `TaleWorlds.CampaignSystem/IFaction.cs:13` 的标注和本文件自身，说明它纯粹是声明层标记：

```csharp
// 读取接口上的标注（自查用）
var attr = typeof(IFaction).GetCustomAttribute<SaveableInterfaceAttribute>();
int declaredId = attr?.SaveId ?? -1;   // IFaction 上是 22001

// 但运行时真正生效的编号来自这里：
// TaleWorlds.CampaignSystem/SaveableCampaignTypeDefiner.cs:364
//   base.AddInterfaceDefinition(typeof(IFaction), 3001);
```

### 典型用法

给自己的接口声明身份，并在 definer 里登记：

```csharp
using TaleWorlds.SaveSystem;

[SaveableInterface(32001)]
public interface IMyModCaravanContract
{
    int GoldPerDay { get; }
}

public class MyModTypeDefiner : SaveableTypeDefiner
{
    public MyModTypeDefiner() : base(32000) { }

    protected override void DefineInterfaceTypes()
    {
        // 接口定义没有 resolver 参数
        base.AddInterfaceDefinition(typeof(IMyModCaravanContract), 1);
    }

    protected override void DefineClassTypes()
    {
        // 真正会被实例化、被写进存档的是实现类
        base.AddClassDefinition(typeof(MyCaravanContract), 2, null);
    }
}
```

### 坑

- **接口定义不会替你注册实现类。** 只登记接口，存档里能记住「这个 id 是个 `IMyModCaravanContract`」，但反序列化时没有可构造的类型，对象图会断在这里。接口与实现类必须**成对**登记。
- **`AddInterfaceDefinition` 没有 resolver。** 别照抄 `AddClassDefinition(typeof(X), 1, resolver)` 的三参形态去写接口，编译期就会报参数不匹配。
- **编号是两个体系。** `IFaction` 标 `22001`（`TaleWorlds.CampaignSystem/IFaction.cs:13`）而注册 `3001`（`TaleWorlds.CampaignSystem/SaveableCampaignTypeDefiner.cs:364`）。运行时只认 `saveBaseId + saveId`。
- **`AttributeUsage` 只允许 `Interface`。** 类请用 `SaveableRootClassAttribute`，标错目标直接编译失败。

## 关键成员

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `SaveId` | `public int SaveId { get; set; }` | 特性携带的整数编号，只在标注层有意义。真正的接口编号由 `SaveableTypeDefiner.AddInterfaceDefinition` 决定（`IFaction` 标 22001、注册 3001 就是实证）。属性带 setter，反射可改。 | `SaveableInterfaceAttribute.cs:12` |

表外说明：构造函数 `SaveableInterfaceAttribute(int saveId)` 只把参数写进 `SaveId`；使用时写特性简写 `[SaveableInterface(22001)]`，不手写 `new`。

## 真实示例

官方唯一标注点 + 对应的真实登记：

```csharp
// TaleWorlds.CampaignSystem/IFaction.cs:13
[SaveableInterface(22001)]
public interface IFaction
{
    TextObject Name { get; }
    /* ... */
}

// TaleWorlds.CampaignSystem/SaveableCampaignTypeDefiner.cs:364 —— 真正建表的一行
protected override void DefineInterfaceTypes()
{
    base.AddInterfaceDefinition(typeof(IFaction), 3001);
}
```

definer 侧的方法本体（无 resolver 参数，编号被 `saveBaseId` 偏移）：

```csharp
// TaleWorlds.SaveSystem/SaveableTypeDefiner.cs:144
protected void AddInterfaceDefinition(Type type, int saveId)
{
    InterfaceDefinition interfaceDefinition = new InterfaceDefinition(type, this._saveBaseId + saveId);
    this._definitionContext.AddInterfaceDefinition(interfaceDefinition);
}
```

mod 侧的接口 + 实现类成对登记：

```csharp
[SaveableInterface(32001)]
public interface IMyModCaravanContract { int GoldPerDay { get; } }

public class MyModTypeDefiner : SaveableTypeDefiner
{
    public MyModTypeDefiner() : base(32000) { }

    protected override void DefineInterfaceTypes()
        => AddInterfaceDefinition(typeof(IMyModCaravanContract), 1);

    protected override void DefineClassTypes()
        => AddClassDefinition(typeof(MyCaravanContract), 2, null);
}
```

## 参见

- [`../../campaign/Campaign`](../../campaign/Campaign) —— 全局对象图根，`IFaction` 这类接口身份最终都挂在它下面的引用链里。
- [`../SaveableTypeDefiner`](../SaveableTypeDefiner) —— `AddInterfaceDefinition` 的宿主，接口登记的唯一入口。
- [`../SaveableRootClassAttribute`](../SaveableRootClassAttribute) —— 类版的同类标注，两者作用域互补。
- [`../_index`](../_index) —— `save-system` 桶全类型索引。

## 导航

- 同桶：[`../SaveableRootClassAttribute`](../SaveableRootClassAttribute) · [`../ISavedStruct`](../ISavedStruct) · [`../SaveableTypeDefiner`](../SaveableTypeDefiner)
- 父索引：[`../_index`](../_index)
