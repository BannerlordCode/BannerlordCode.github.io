---
title: "SaveableRootClassAttribute"
description: "标在类上的「这是存档根对象」声明特性；它只携带身份与编号，真正把类型写进存档类型表的是 SaveableTypeDefiner.AddRootClassDefinition。"
---
# SaveableRootClassAttribute

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class SaveableRootClassAttribute : Attribute`
**Source:** `TaleWorlds.SaveSystem/SaveableRootClassAttribute.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`SaveableRootClassAttribute` 是一个**声明性标记**：写在类上，表示「这个类是存档对象图里可以被独立寻址的根对象」。它继承 `System.Attribute`，`AttributeUsage` 限定为 `AttributeTargets.Class`（标到结构体或接口上会直接编译报错），构造时接收一个整数并把它存进 `SaveId` 属性。

这里有一个必须说清的事实：**光写这个特性不会让任何东西进存档。** 在 `bannerlord-1.4.6` 全树里 `SaveableRootClass` 只出现在两个地方——`TaleWorlds.Core/Game.cs:14` 的 `[SaveableRootClass(5000)]` 标注，和 `DefinitionContext.GetSaveableAssemblies()`（`TaleWorlds.SaveSystem/Definition/DefinitionContext.cs:254`）方法体里那句 `Assembly assembly = typeof(SaveableRootClassAttribute).Assembly;`（`TaleWorlds.SaveSystem/Definition/DefinitionContext.cs:257`）。后者说明它在运行时的**第一个真实用途是当「TaleWorlds.SaveSystem 程序集的锚点类型」**：这个方法靠它定位 SaveSystem 自己，再筛出所有引用了 SaveSystem 的程序集去扫描 definer。

真正把类型写进存档类型表的是 definer 里的 `AddRootClassDefinition`，见 `TaleWorlds.Core/SaveableCoreTypeDefiner.cs:89` 的 `base.AddRootClassDefinition(typeof(Game), 4001, null);`。注意这里的 `4001` 与特性上写的 `5000` **并不相同**——运行时的编号以 definer 注册的为准，特性上的数字不参与建表。

## 心智模型

把存档类型系统想成两层，本类型只活在上面那一层：

1. **标注层（本类型）**：`[SaveableRootClass(n)]` 是给人看、给工具扫的元数据。它可 grep、可在反编译产物里一眼认出「这个类是个存档根」，也是 `TaleWorlds.MountAndBlade.SaveSystem.CodeGenerator` 那类外部代码生成器读取的素材。
2. **登记层（权威）**：`SaveableTypeDefiner.AddRootClassDefinition(type, saveId, resolver)`（`TaleWorlds.SaveSystem/SaveableTypeDefiner.cs:130`）才会真的往 `DefinitionContext` 的根类定义表里加一条，编号是 `definer.saveBaseId + saveId`。`DefinitionContext.FillWithCurrentTypes()`（`TaleWorlds.SaveSystem/Definition/DefinitionContext.cs:173`）在阶段循环里调 `DefineRootClassTypes()`（`TaleWorlds.SaveSystem/Definition/DefinitionContext.cs:206`），这一步跑完类型表才成型。

「根」和「普通类定义」的语义差别在于寻址起点：普通类定义（`AddClassDefinition`）回答「这个类型能不能被字段引用」，根类定义回答「这个类型能不能被对象表直接当作起点」。`Game` 是典型——它下面挂着整个 campaign 的对象图。

所以对 mod 作者的实用结论是：**想让自己管理的对象进存档，你要做的是写 definer，不是写特性。** 特性写不写只影响可读性与外部工具链。

## 怎么用

### 怎么拿到

它不是靠 `new` 用的运行时对象，而是靠反射读取的元数据。官方唯一读取点就是用它的 `Assembly` 属性来定位程序集：

```csharp
// TaleWorlds.SaveSystem/Definition/DefinitionContext.cs:257 —— 官方用法：拿 SaveSystem 程序集本身
Assembly saveSystemAssembly = typeof(SaveableRootClassAttribute).Assembly;

// 如果你想读某个类上的标注（自查 / 外部工具）
var attr = typeof(Game).GetCustomAttribute<SaveableRootClassAttribute>();
int declaredId = attr?.SaveId ?? -1;   // Game 上是 5000，但注册编号其实是 4001
```

### 典型用法

声明层和登记层都要做，缺一不可：

```csharp
using TaleWorlds.SaveSystem;

[SaveableRootClass(31000)]           // 声明层：可 grep 的身份标记
public class MyModWorldState
{
    [SaveableField(1)] private int _dayCounter;
}

public class MyModTypeDefiner : SaveableTypeDefiner
{
    public MyModTypeDefiner() : base(31000) { }

    protected override void DefineRootClassTypes()
    {
        // 登记层：唯一权威。编号 = 31000 + 1
        base.AddRootClassDefinition(typeof(MyModWorldState), 1, null);
    }
}
```

### 坑

- **只标特性不登记 = 完全没进存档。** `FillWithCurrentTypes()` 不读这个特性；`CollectTypes` 只找 `SaveableTypeDefiner` 的非抽象子类。你的类不会因为标了它就获得存档编号。
- **特性上的 `SaveId` 与 definer 里的 `saveId` 是两个体系。** `Game` 是活证据：标注 5000（`TaleWorlds.Core/Game.cs:14`），注册 4001（`TaleWorlds.Core/SaveableCoreTypeDefiner.cs:89`）。运行时只认后者。
- **`AttributeUsage` 只允许 `Class`。** 结构体走 `AddStructDefinition`，接口走 `SaveableInterfaceAttribute`，别混用；标错目标编译期就报错，这是好事。
- **`SaveId` 有公开 setter。** 它在构造器里被赋值，但反射代码可以改它。不要假设「读到的标注值 == 构造时传的值」。

## 关键成员

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `SaveId` | `public int SaveId { get; set; }` | 特性携带的整数编号。它只存在于标注层：运行时类型表用的是 `SaveableTypeDefiner.AddRootClassDefinition` 里传的 `saveBaseId + saveId`，两者不联动——`Game` 标 5000 而注册 4001 就是实证。属性带 setter，反射可改。 | `SaveableRootClassAttribute.cs:12` |

表外说明：构造函数 `SaveableRootClassAttribute(int saveId)` 只做一件事——把参数写进 `SaveId`。使用时写特性简写 `[SaveableRootClass(5000)]` 即可，不会手写 `new`。

## 真实示例

官方唯一的标注点，和它对应的真实登记，两行放一起看：

```csharp
// TaleWorlds.Core/Game.cs:14
[SaveableRootClass(5000)]
public sealed class Game : IGameStateManagerOwner { /* ... */ }

// TaleWorlds.Core/SaveableCoreTypeDefiner.cs:89 —— 真正让 Game 进类型表的一行
protected override void DefineRootClassTypes()
{
    base.AddRootClassDefinition(typeof(Game), 4001, null);
}
```

`DefinitionContext` 侧看到这个类型时，只把它当程序集锚点用：

```csharp
// TaleWorlds.SaveSystem/Definition/DefinitionContext.cs:257
Assembly assembly = typeof(SaveableRootClassAttribute).Assembly;
```

mod 侧最小可编译写法（标注 + 登记各一行）：

```csharp
[SaveableRootClass(31000)]
public class MyModWorldState { }

public class MyModTypeDefiner : SaveableTypeDefiner
{
    public MyModTypeDefiner() : base(31000) { }
    protected override void DefineRootClassTypes()
        => AddRootClassDefinition(typeof(MyModWorldState), 1, null);
}
```

## 参见

- [`../../core-extra/Game`](../../core-extra/Game) —— 全仓库唯一的 `[SaveableRootClass]` 标注点，也是根对象写法的范例。
- [`../SaveableTypeDefiner`](../SaveableTypeDefiner) —— `AddRootClassDefinition` 的宿主，登记层的唯一正规入口。
- [`../SaveableInterfaceAttribute`](../SaveableInterfaceAttribute) —— 接口版的同类标注，作用域与注册路径都不同。
- [`../_index`](../_index) —— `save-system` 桶全类型索引。

## 导航

- 同桶：[`../SaveableInterfaceAttribute`](../SaveableInterfaceAttribute) · [`../ISavedStruct`](../ISavedStruct) · [`../SaveableTypeDefiner`](../SaveableTypeDefiner)
- 父索引：[`../_index`](../_index)
