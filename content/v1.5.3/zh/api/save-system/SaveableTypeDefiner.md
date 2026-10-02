---
title: "SaveableTypeDefiner"
description: "存档类型定义器：为你的可存档类型分配全局唯一 save id、声明枚举/结构/类/容器的序列化规则。id 冲突是 mod 存档互毁的头号原因。"
---

# SaveableTypeDefiner

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public abstract class SaveableTypeDefiner`
**Base:** 无（抽象基类）
**Source:** `bannerlord-1.5.3/TaleWorlds.SaveSystem/SaveableTypeDefiner.cs`

## 概述

`SaveableTypeDefiner` 是存档系统里「**我这些类型可以被存，id 是多少，字段怎么映射**」的声明处。你写一个派生类、在构造函数里选定 `saveBaseId`，然后在 `Define*Types` 覆写里调 `Add*Definition`，引擎在构建全局定义上下文时会反射扫描到它。它不执行任何保存动作，只提供**元数据**——但正是这份元数据决定了你的字段在存档里占哪几个字节、别人读你的存档能不能读对。

## 心智模型

```
SaveManager.InitializeGlobalDefinitionContext()
  └ new DefinitionContext().FillWithCurrentTypes()
       └ 扫描所有已加载程序集，找 SaveableTypeDefiner 的派生类并实例化
            └ definer.Construct(...)
                 ├ DefineBasicTypes()
                 ├ DefineEnumTypes()
                 ├ DefineStructTypes()
                 ├ DefineClassTypes()
                 ├ DefineInterfaceTypes()
                 ├ DefineContainerDefinitions()
                 └ DefineConflictResolvers()
```

`saveBaseId` 是**号段起点**。官方 behavior 的 definer 普遍用 80000（例：`CompanionGrievanceBehaviorTypeDefiner() : base(80000)`，内部 `AddEnumDefinition(typeof(GrievanceType), 1, null)` 与 `AddClassDefinition(typeof(Grievance), 10, null)`）。也就是说：**`saveBaseId` 选号段，`Add*Definition` 的第二个参数是号段内的偏移**，最终 save id = base + offset（具体合成方式由 DefinitionContext 负责，你只需保证唯一）。

**常见误用与坑**

1. **save id 撞车**。两个 mod 都用 `base(80000)` 且偏移相同 → `DefinitionContext.GotError` → **所有存档直接失败**。选一个别人不会用的号段（比如你自己的高位段），并在 mod 文档里公开它。
2. **发布后改 id**。id 变了等于字段换了位置，老存档读出来的是别的字段的值（静默错乱，不报错）。
3. **忘了注册类型**。字段带 `[SaveableField]` 但类型没在 definer 里定义 → 存档丢字段或失败。用 `SaveManager.CheckSaveableTypes()` 自查。
4. **容器定义遗漏**。字段是 `Dictionary<Hero, Grievance>` 这类，需要 `ConstructContainerDefinition(typeof(Dictionary<Hero, Grievance>))`；漏掉就会在保存时炸。
5. **覆写 `Define*Types` 时不调 `base`**：通常没问题（基类实现是空的），但 `AddClassDefinition` 的 resolver 参数要按需传。

## 成员与调用时机

**构造**

- `protected SaveableTypeDefiner(int saveBaseId)`：选号段。这是唯一的构造入口。

**定义阶段覆写点（全部 `protected internal virtual`）**

- `DefineBasicTypes()`：基本类型（int、float、字符串等）映射。
- `DefineEnumTypes()`：枚举 → 调 `AddEnumDefinition`。
- `DefineStructTypes()`：结构 → `AddStructDefinition`。
- `DefineClassTypes()`：类 → `AddClassDefinition`。
- `DefineInterfaceTypes()`：接口 → `AddInterfaceDefinition`。
- `DefineContainerDefinitions()`：`Dictionary<,>` / `List<>` 等泛型容器 → `ConstructContainerDefinition`。
- `DefineGenericClassDefinitions()` / `DefineGenericStructDefinitions()`：自定义泛型定义。
- `DefineConflictResolvers()`：id 冲突时的解析器 → `AddConflictResolver`。
- `DefineRootClassTypes()`：根对象类型 → `AddRootClassDefinition`。

**注册方法（全部 `protected`，在覆写里调）**

- `AddBasicTypeDefinition(Type type, int saveId, IBasicTypeSerializer serializer)`
- `AddEnumDefinition(Type type, int saveId, IEnumResolver enumResolver = null)`
- `AddStructDefinition(Type type, int saveId, IObjectResolver resolver = null)`
- `AddClassDefinition(Type type, int saveId, IObjectResolver resolver = null)`
- `AddClassDefinitionWithCustomFields(Type type, int saveId, IEnumerable<Tuple<string, short>> fields, IObjectResolver resolver = null)`：**显式列出要存的字段名与 id**。比逐个 `[SaveableField]` 更可控，适合第三方类型。
- `AddStructDefinitionWithCustomFields(Type type, int saveId, IEnumerable<Tuple<string, short>> fields, IObjectResolver resolver = null)`
- `AddRootClassDefinition(Type type, int saveId, IObjectResolver resolver = null)`
- `AddInterfaceDefinition(Type type, int saveId)`
- `AddConflictResolver(int saveId, IConflictResolver conflictResolver)`
- `ConstructContainerDefinition(Type type)` / `ConstructGenericClassDefinition(Type)` / `ConstructGenericStructDefinition(Type)`

**官方实例参考**：`CompanionGrievanceBehaviorTypeDefiner` 用 `base(80000)`，在 `DefineEnumTypes` 里 `AddEnumDefinition(typeof(GrievanceType), 1, null)`，在 `DefineClassTypes` 里 `AddClassDefinition(typeof(Grievance), 10, null)`，在 `DefineContainerDefinitions` 里 `ConstructContainerDefinition(typeof(Dictionary<Hero, Grievance>))`。三个覆写点各司其职，是最短的正确范例。

## 真实示例

```csharp
// 自定义 definer：号段选一个远离官方的区间
public class MyTributeTypeDefiner : SaveableTypeDefiner
{
    public MyTributeTypeDefiner() : base(760000) { }   // 与官方 80000 段隔离

    protected override void DefineEnumTypes()
    {
        base.AddEnumDefinition(typeof(MyTributeRecord.MyTributeKind), 1, null);
    }

    protected override void DefineClassTypes()
    {
        base.AddClassDefinition(typeof(MyTributeRecord), 10, null);
    }

    protected override void DefineContainerDefinitions()
    {
        base.ConstructContainerDefinition(typeof(Dictionary<Hero, MyTributeRecord>));
    }
}

// 对应的数据类：字段用 SaveableProperty 声明
public class MyTributeRecord
{
    [SaveableProperty(4)] public int Amount { get; private set; }
    [SaveableProperty(5)] public MyTributeKind Kind { get; private set; }
}

// 启动期验证：类型都注册了吗
SaveManager.InitializeGlobalDefinitionContext();
List<Type> missing = SaveManager.CheckSaveableTypes();
if (missing.Count > 0) Debug.Print("missing save defs: " + missing.Count);
```

## 风险与边界

- **存档兼容性是本类唯一真正重要的属性**：id 一旦发布就是 ABI。新增字段用新偏移，删除字段保留占位（不要重排），改枚举成员顺序会让老存档里的枚举值错位。
- **号段协调是 mod 生态问题**：官方占 80000 段。mod 之间没有中心注册表，只能靠约定——选高位、公开、写进 mod 说明。
- **反射扫描时机**：`FillWithCurrentTypes()` 在定义上下文初始化时扫描已加载程序集。你的 definer 类所在的程序集必须在那之前加载（模块的 `OnSubModuleLoad` 会保证）。
- **不影响运行时**：注册错误不会在游戏运行时暴露，只在存档时炸。用 `CheckSaveableTypes()` + 手动存读档做发布前验证。
- **跨域方向**：SaveSystem 层不依赖 CampaignSystem。它靠反射认识你的类型，所以类型可以是任何命名空间的——但**类型必须可从你的程序集公开访问**。

## 依赖关系

- [SaveManager](../SaveManager) — 构建定义上下文、消费本类声明，并提供 `CheckSaveableTypes()` 自查
- [SaveContext](../SaveContext) — 读档时用这份定义把字节还原成对象
- [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) — 最常见的存档宿主，其 `SyncData` 写入的字段需要本类定义
- [ISaveDriver](../ISaveDriver) — 定义产生的字节流最终由它落盘