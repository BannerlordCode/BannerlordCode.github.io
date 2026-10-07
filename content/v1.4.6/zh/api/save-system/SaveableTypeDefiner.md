---
title: "SaveableTypeDefiner"
description: "存档类型定义的抽象基类：mod 靠子类向 DefinitionContext 登记类、结构体、枚举、容器与泛型的存档编号。"
---
# SaveableTypeDefiner

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public abstract class SaveableTypeDefiner`
**Base:** `System.Object`
**Source:** `TaleWorlds.SaveSystem/SaveableTypeDefiner.cs`

## 概述

这是 mod 接入 Bannerlord 存档系统的**唯一正规入口**。保存系统不硬编码任何类型表：它扫描 AppDomain 里所有引用了 `TaleWorlds.SaveSystem` 的程序集，找出所有 `SaveableTypeDefiner` 的**非抽象子类**，用 `Activator.CreateInstance(type)` 无参实例化，然后按固定阶段依次回调每个 definer 的 `Define*Types()`。你在这些回调里调 `AddClassDefinition(typeof(X), 1)` 之类的注册方法，就把「.NET 类型 ↔ 存档编号」写进了 `DefinitionContext`。

构造函数里的 `saveBaseId` 是这个 definer 的**编号前缀**：所有 `Add*Definition(type, saveId)` 最终存进上下文的是 `saveBaseId + saveId`。这样每个 definer 只需在自己的一小块号段里分配相对号，天然避免跨程序集撞号。基类本身不做任何注册工作，所有 `Define*` 默认都是空实现。

## 心智模型

把 definer 想成「存档格式的 schema 声明文件」，而且是一组**并行编译、没有依赖顺序**的声明文件。

真实调用顺序在 `DefinitionContext.FillWithCurrentTypes()` 里写死了：

1. `GetSaveableAssemblies()` → `CollectTypes(assembly)` 实例化全部 definer（**要求公开无参构造**，你的子类构造器必须 `public` 且 `base(N)`）。
2. 逐个 `Initialize(definitionContext)`（internal，由框架调）。
3. 阶段循环：`DefineBasicTypes` → `DefineClassTypes` → `DefineStructTypes` → `DefineInterfaceTypes` → `DefineEnumTypes` → `DefineRootClassTypes` → `DefineGenericStructDefinitions` → `DefineGenericClassDefinitions` → `DefineContainerDefinitions` → `DefineConflictResolvers`。
4. 收集回调与成员：`TypeDefinition.CollectInitializationCallbacks/CollectProperties/CollectFields`，用 `TWParallel.ForEach` **并行**跑；`StructDefinition` 同理。
5. 把各 `TypeDefinition.Errors` 汇总进 `DefinitionContext.Errors`。

关键点：**每个阶段是「所有 definer 走完，再进下一阶段」**，不是「一个 definer 走完所有阶段」。所以你不能在 `DefineClassTypes` 里假设别的 definer 的类已经注册好了。阶段内部的注册顺序也没有保证——`AddClassDefinition` 底层是 `Dictionary.Add`，重复 Type 或重复 saveId 会直接抛 `ArgumentException`，错误信息为 `There is duplicate definition for ...`。

常见误用：**忘记 public 无参构造**（definer 静默不被发现，保存时类型无定义）；**saveBaseId 与官方或其它 mod 撞段**（`Dictionary.Add` 抛异常，整个存档系统初始化失败）；**在 `DefineClassTypes` 里引用 `HasDefinition` 判断别的 definer**（阶段保证不了，你会得到 false）。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `.ctor` | `protected SaveableTypeDefiner(int saveBaseId)` | 保存编号前缀。子类构造器必须 `public`（框架用 `Activator.CreateInstance` 无参实例化），并把一个自己独占的号段基数传给基类。 |
| `Initialize` | `internal void Initialize(DefinitionContext definitionContext)` | 框架在所有 `Define*` 之前把上下文塞进 `_definitionContext` 字段。这是**全部注册方法的实现基础**——`_definitionContext` 为 null 时任何 `Add*` 都会 NRE。由 `FillWithCurrentTypes()` 调用，mod 不要手动调。 |
| `DefineBasicTypes` | `protected internal virtual void DefineBasicTypes()` | 声明基础类型的读写器。配合 `AddBasicTypeDefinition(type, saveId, IBasicTypeSerializer)`，用于把「不像普通标量、但能压成一个基本值」的类型映射成可存的基本值——官方里 `TaleWorlds.ObjectSystem.SaveableObjectSystemTypeDefiner` 就是用 `AddBasicTypeDefinition(typeof(MBGUID), 1005, new MBGUIDBasicTypeSerializer())` 这么做的。默认空实现。 |
| `DefineClassTypes` | `protected internal virtual void DefineClassTypes()` | 声明引用类型。配合 `AddClassDefinition` / `AddClassDefinitionWithCustomFields` / `AddRootClassDefinition`。mod 绝大多数场景只需要重写这一个。 |
| `DefineConflictResolvers` | `protected internal virtual void DefineConflictResolvers()` | 为特定 saveId 挂 `IConflictResolver`，用于跨版本 ID 变动时的兼容解析。配合 `AddConflictResolver(saveId, resolver)`。默认空实现。 |
| `DefineStructTypes` | `protected internal virtual void DefineStructTypes()` | 声明值类型。配合 `AddStructDefinition` / `AddStructDefinitionWithCustomFields`。`StructDefinition` 也参与成员收集，所以结构体同样能挂 [SaveableFieldAttribute](../SaveableFieldAttribute)。 |
| `DefineInterfaceTypes` | `protected internal virtual void DefineInterfaceTypes()` | 声明接口类型。配合 `AddInterfaceDefinition(type, saveId)`——注册的是**接口本身**，用来告诉保存系统「这个接口是存档寻址的根身份」。 |
| `DefineEnumTypes` | `protected internal virtual void DefineEnumTypes()` | 声明枚举。配合 `AddEnumDefinition(type, saveId, IEnumResolver)`，`IEnumResolver` 负责在数值变了的旧档上把旧值映射回来。 |
| `DefineRootClassTypes` | `protected internal virtual void DefineRootClassTypes()` | 声明「可被独立寻址的根对象」类型。配合 `AddRootClassDefinition`。`Game` 自己就是 `[SaveableRootClass(5000)]`。根类型与普通类定义的差别在于它需要能被对象表直接引用。 |
| `DefineGenericClassDefinitions` | `protected internal virtual void DefineGenericClassDefinitions()` | 声明泛型引用类型的定义。配合 `ConstructGenericClassDefinition(typeof(List<YourType>))`。 |
| `DefineGenericStructDefinitions` | `protected internal virtual void DefineGenericStructDefinitions()` | 声明泛型值类型的定义。配合 `ConstructGenericStructDefinition(...)`。 |
| `DefineContainerDefinitions` | `protected internal virtual void DefineContainerDefinitions()` | 声明集合类型。配合 `ConstructContainerDefinition(typeof(List<YourType>))`——这个方法**不是 Add**，它检测到重复定义时会走 `Debug.FailedAssert("There is duplicate definition for ...")`。 |
| `ConstructGenericClassDefinition` | `protected void ConstructGenericClassDefinition(Type type)` | 转发到 `_definitionContext.ConstructGenericClassDefinition(type)`，声明一个具体的泛型闭合类型。 |
| `ConstructGenericStructDefinition` | `protected void ConstructGenericStructDefinition(Type type)` | 同上，泛型值类型版本。 |
| `AddBasicTypeDefinition` | `protected void AddBasicTypeDefinition(Type type, int saveId, IBasicTypeSerializer serializer)` | 注册基础类型定义，实际编号是 `_saveBaseId + saveId`。`serializer` 决定这个类型按什么基本类型编码落盘。 |
| `AddConflictResolver` | `protected void AddConflictResolver(int saveId, IConflictResolver conflictResolver)` | 给 `_saveBaseId + saveId` 这个编号挂一个冲突解析器，编号相同会抛（底层 `Dictionary.Add`）。 |
| `AddClassDefinition` | `protected void AddClassDefinition(Type type, int saveId, IObjectResolver resolver = null)` | 最常用的注册：把引用类型登记为 `_saveBaseId + saveId`。`resolver` 负责「存档里那个整数 id ↔ 运行时对象」的映射，不传就用默认线性查找。 |
| `AddClassDefinitionWithCustomFields` | `protected void AddClassDefinitionWithCustomFields(Type type, int saveId, IEnumerable<Tuple<string, short>> fields, IObjectResolver resolver = null)` | 同上，但额外声明一组**自定义字段名 → 槽位号**映射。给那些没法用 `[SaveableField]` 标注的成员（第三方类型、继承来的字段）补描述用。 |
| `AddStructDefinitionWithCustomFields` | `protected void AddStructDefinitionWithCustomFields(Type type, int saveId, IEnumerable<Tuple<string, short>> fields, IObjectResolver resolver = null)` | `StructDefinition` 版的自定义字段版本。 |
| `AddRootClassDefinition` | `protected void AddRootClassDefinition(Type type, int saveId, IObjectResolver resolver = null)` | 把类型登记为可独立寻址的**根对象**类型，编号同样是 `_saveBaseId + saveId`。 |
| `AddStructDefinition` | `protected void AddStructDefinition(Type type, int saveId, IObjectResolver resolver = null)` | 注册值类型定义，编号 `_saveBaseId + saveId`。 |
| `AddInterfaceDefinition` | `protected void AddInterfaceDefinition(Type type, int saveId)` | 注册接口定义，编号 `_saveBaseId + saveId`。 |
| `AddEnumDefinition` | `protected void AddEnumDefinition(Type type, int saveId, IEnumResolver enumResolver = null)` | 注册枚举定义。`enumResolver` 用于老档枚举值含义变更时的兼容。 |
| `ConstructContainerDefinition` | `protected void ConstructContainerDefinition(Type type)` | 声明集合类型定义。**注意语义不同**：若 `HasDefinition(type)` 已为真，会打 `Debug.FailedAssert("There is duplicate definition for {type}")`，而不是像 `Add*` 那样抛异常。 |

## 怎么用

### 怎么拿到它

`SaveableTypeDefiner` 是 `public abstract class SaveableTypeDefiner`（`TaleWorlds.SaveSystem/SaveableTypeDefiner.cs:11`）——**抽象类**，而且它的构造器是 `protected SaveableTypeDefiner(int saveBaseId)`（`:14`），只做一件事 `this._saveBaseId = saveBaseId;`（`:15`）。它不是用 `new` 得到的，而是引擎在构建定义上下文时 `internal void Initialize(DefinitionContext definitionContext)`（`:19`）注入的。

**它的核心机制是一个 `saveBaseId` 偏移量。** 所有 `Add*Definition` 方法都把 `saveBaseId + saveId` 传给 `DefinitionContext`——看 `AddClassDefinition`（`:101`）的 `new TypeDefinition(type, this._saveBaseId + saveId, resolver)`（`:102`）、`AddConflictResolver`（`:95`）的 `new TypeSaveId(this._saveBaseId + saveId)`（`:96`）。所以你在自己的 definer 里写的 `saveId` 是**模块内相对编号**，引擎用一个模块专属的 base 把它们推到全局唯一区间。这就是为什么各模块的 definer 都能从 `saveId = 0` 开始数。

你的子类要覆写的是那八个 `protected internal virtual void Define*()` 空方法（`:26` 的 `DefineBasicTypes` 到 `:71` 的 `DefineContainerDefinitions`），并在对应位置调 `Add*`。这些方法的可见性是 `protected internal`——**外部程序集继承时只能改写、不能直接调用**，引擎侧才是调用方。

### 典型用法

为一个模组写一个 definer，告诉存档系统它的类型：

```csharp
using TaleWorlds.Core;
using TaleWorlds.SaveSystem;
using System;
using System.Collections.Generic;

public class MyModTypeDefiner : SaveableTypeDefiner
{
    // saveBaseId 由引擎决定，不要自己挑
    public MyModTypeDefiner(int saveBaseId) : base(saveBaseId) { }   // SaveableTypeDefiner.cs:14

    protected internal override void DefineClassTypes()
    {
        base.DefineClassTypes();
        AddClassDefinition(typeof(Monster), 0);        // :101，实际 id = saveBaseId + 0
        AddClassDefinition(typeof(ItemObject), 1);     // :101，实际 id = saveBaseId + 1
    }

    protected internal override void DefineStructTypes()
    {
        base.DefineStructTypes();
        AddStructDefinition(typeof(EquipmentElement), 0, null);      // :137

        // 自定义字段版：把「成员名 + short 编号」交给它
        AddClassDefinitionWithCustomFields(typeof(TavernLedger), 2,
            new List<Tuple<string, short>>
            {
                Tuple.Create("Visits", (short)0),     // 对应 [SaveableProperty(0)]
                Tuple.Create("DebtGold", (short)1),    // 对应 [SaveableField(1)]
            });                                        // :108，内部逐条 typeDefinition.AddCustomField
    }

    protected internal override void DefineEnumTypes()
    {
        AddEnumDefinition(typeof(EquipmentIndex), 0);  // :151
    }
}
```

### 最容易踩的坑

**在自己写的 definer 里直接用全局编号，而不是相对编号。** 每个 `Add*` 都会把 `this._saveBaseId + saveId` 当作真正的存档 id（`:96`、`:102`）。如果你从别处抄来一段 `AddClassDefinition(typeof(Hero), 13000)` 这种「全局号」写进自己的 definer，实际生效的是 `你的 base + 13000`——一个完全不同的、很可能和别的模块撞上的号。后果是**读别人的存档时你的字段被解析成别人的类型**，或者反过来：你的数据写进去后别人的存档解析器认出它、然后按错误的类型去构造对象。这类冲突在开发期完全看不出来，只有在读取别人的存档时才炸。

第二个坑是 `saveId` 从 0 开始写满但漏掉了某个类型。存档类型表是**紧凑索引**——`:102` 把 `base + saveId` 作为定义上下文的键，漏掉的号就是空洞，不会自动补位。所以「0、1、3」比「0、1、2」更危险：2 号位空着不会有任何提示，但等你在后续版本想补一个类型时，如果补的就是 2，那一切正常——**真正的风险是你以为编号连续、实际某个号被引擎的其它定义占用了**。写完 definer 一定要用 `SaveManager.CheckSaveableTypes()`（`SaveManager.cs:28`）跑一遍检查。

## 真实示例

一个完整的 mod definer：公开无参构造、独立号段、重写 `DefineClassTypes` 登记引用类型与根类型：

```csharp
public class MyModSaveableTypeDefiner : SaveableTypeDefiner
{
    public MyModSaveableTypeDefiner() : base(31000)
    {
    }

    protected override void DefineClassTypes()
    {
        AddClassDefinition(typeof(MyTradeContract), 1);
        AddClassDefinition(typeof(MyLedgerEntry), 2);
    }

    protected override void DefineEnumTypes()
    {
        AddEnumDefinition(typeof(MyContractState), 1, new MyContractStateResolver());
    }

    protected override void DefineContainerDefinitions()
    {
        ConstructContainerDefinition(typeof(List<MyTradeContract>));
    }
}
```

自定义字段名映射，用来描述继承来的、无法标注的成员：

```csharp
protected override void DefineClassTypes()
{
    AddClassDefinitionWithCustomFields(
        typeof(ThirdPartyTradeRow),
        20,
        new List<Tuple<string, short>>
        {
            Tuple.Create("TownName", (short)0),
            Tuple.Create("GoldPerDay", (short)1)
        });
}
```

启动后自查 definer 有没有被发现（需要 `InitializeGlobalDefinitionContext` 已经跑过）：

```csharp
SaveManager.InitializeGlobalDefinitionContext();
if (!SaveManager.CheckSaveableTypes().Contains(typeof(MyTradeContract)))
{
    Debug.Print("MyTradeContract 定义缺失，检查 definer 是否有 public 无参构造", 0);
}
```

## 风险与边界

- **必须公开无参构造。** `DefinitionContext.CollectTypes` 用 `Activator.CreateInstance(type)`，非公开或带参构造会让 definer 静默消失——没有任何异常，只有后续「类型无定义」的错误。
- **saveBaseId 撞号是致命的。** 底层是 `Dictionary.Add`，冲突直接抛异常，整个 `FillWithCurrentTypes()` 失败，进而 `DefinitionContext.GotError` 为真、所有保存全挂。官方占用了大量低位号段（`Game` 是 5000），选一个大基数并在自己的 mod 之间协调。
- **阶段顺序不能依赖。** 十一个 `Define*` 是「全局分阶段」，不是「每个 definer 走完整流程」。跨 definer 的顺序假设一定会错。
- **重复注册不幂等。** 同一 Type 或同一 saveId 重复 `Add*` 会抛；`ConstructContainerDefinition` 重复则走 `Debug.FailedAssert`。
- **`_definitionContext` 在 `Initialize` 之前是 null。** 只能在 `Define*` 回调里调 `Add*` / `Construct*`，不要在自己的构造器里做注册。
- **无参构造在每次 `FillWithCurrentTypes` 都会被重新调用。** `SaveManager.Load` 每次都新建 `DefinitionContext` 再填表，所以 definer 的构造器会反复执行；别在里面做重活或产生副作用。
- **成员收集是并行的。** `TWParallel.ForEach` 跑 `CollectFields/CollectProperties`，所以自定义的 `IObjectResolver`、`IEnumResolver` 实现必须线程安全。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.SaveSystem/SaveableTypeDefiner.cs` 逐行比对，**public/protected 表面完全一致**：构造器、11 个 `Define*` 虚方法、2 个 `ConstructGeneric*Definition`、9 个 `Add*Definition`、`ConstructContainerDefinition` 的签名与默认值都没变。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveableTypeDefiner.cs`（150 行）与 `bannerlord-1.4.6/TaleWorlds.SaveSystem/SaveableTypeDefiner.cs`（176 行）逐成员比对 public/protected 表面。**三版 public/protected 表面完全一致（各 23 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 150 行、1.4.6 是 176 行。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 成员标注：[SaveableFieldAttribute](../SaveableFieldAttribute) · [SaveablePropertyAttribute](../SaveablePropertyAttribute)
- 触发者：[SaveManager](../SaveManager) 的 `InitializeGlobalDefinitionContext()` 调 `FillWithCurrentTypes()`，`Load` 每次也重新填表
- 真实根类型示例：[Game](../../core-extra/Game) 标了 `[SaveableRootClass(5000)]`

- 上一级：[v1.4.6 内容根](../../../)
