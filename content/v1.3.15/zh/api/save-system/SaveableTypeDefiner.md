---
title: "SaveableTypeDefiner"
description: "存档类型注册器：通过稳定的 saveBaseId 与局部 SaveId 把自定义类、结构、枚举、接口、容器与基础类型登记进 SaveSystem 的 DefinitionContext。这是为自定义存档字段编写可序列化定义、且保证旧档不坏档的核心入口。"
---

# SaveableTypeDefiner

**命名空间：** `TaleWorlds.SaveSystem`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `public abstract class SaveableTypeDefiner`
**源文件：** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveableTypeDefiner.cs`

## 概述

`SaveableTypeDefiner` 是「类型注册器」：它不保存任何实例数据，而是教给存档序列化器「你这个程序集里有哪些类型可以存档、它们在存档文件里用什么编号标识、成员如何对应、容器如何重建」。当你想往存档里新增一个自定义类、结构、枚举、接口、泛型容器或基础类型时，唯一正确的做法就是写一个 `SaveableTypeDefiner` 的子类，在构造函数里给一个**稳定**的 `saveBaseId`，然后重写 `DefineClassTypes` / `DefineStructTypes` / `DefineContainerDefinitions` 等方法，用 `AddClassDefinition(typeof(T), id)` 这类 helper 把类型登记进去。存档系统（[SaveManager](../SaveManager) 与 [ArchiveSerializer](../ArchiveSerializer)）在保存和加载时正是依赖这些定义来读写对象图的——一旦类型未被定义或编号错乱，自定义字段就会在加载时静默丢失或直接坏档。

## 心智模型

把它想成一张「稳定的存档 schema 表」，由存档系统在你启动游戏、初始化定义上下文时被统一读取，而不是在每次保存某个实例时读取。每个 definer 用构造函数里的 `saveBaseId` 占据一段编号空间；你在 `Define*` 重写方法里用 `AddClassDefinition(typeof(T), localId)` 等 helper 登记类型，helper 内部会把最终保存编号算成 `_saveBaseId + localId` 写进 [DefinitionContext](../DefinitionContext)。成员字段再用 [SaveableFieldAttribute](../SaveableFieldAttribute) / [SaveablePropertyAttribute](../SaveablePropertyAttribute) 上的局部 `LocalSaveId` 参与序列化。因此 `saveBaseId`、类型 `localId`、以及成员 `LocalSaveId` 三者共同构成一份「跨版本兼容契约」：引擎在保存/加载时按编号解析类型与字段，编号一旦发布就**不能**随意改动或复用。definer 在定义阶段只「建表」，不能访问 `Campaign.Current`、创建 `Hero` 或触发游戏事件——那时世界对象图尚未就绪。

## 何时使用 / 何时不要使用

**使用：** 当你需要一个会进入 `SaveManager` 对象图的自定义类型可序列化时——尤其是配合 `CampaignBehaviorBase` 之外的纯数据类、或需要自定义结构/枚举/接口/容器/基础类型序列化器时。标准做法：

1. 写一个 `SaveableTypeDefiner` 子类，构造函数 `: base(你的稳定BaseId)`。
2. 重写 `DefineClassTypes()`，对每个类调用 `AddClassDefinition(typeof(YourType), 稳定LocalId)`。
3. 若字段类型是 `List<T>`、`Dictionary<K,V>` 或数组，重写 `DefineContainerDefinitions()` 调用 `ConstructContainerDefinition(typeof(字典/列表/数组))`。
4. 结构用 `AddStructDefinition`、枚举用 `AddEnumDefinition`、接口用 `AddInterfaceDefinition`、根类（存档图入口）用 `AddRootClassDefinition`。
5. 把类放进一个**引用了 `TaleWorlds.SaveSystem` 的程序集**里即可——引擎在 `DefinitionContext.FillWithCurrentTypes()` 中通过反射自动收集所有**非抽象**的 `SaveableTypeDefiner` 子类并实例化（见下文「真实原生模式」），你不需要、也没有「手动 Add 这个 definer」的 API。

**不要使用：**

- 仅为 `CampaignBehaviorBase` 的几个字段做持久化——那应该用 [IDataStore](../../campaign-ext/IDataStore)（位于 `campaign-ext` 命名空间）。
- 用 definer 去注册 `MBObjectManager` 的 XML 对象类型——那是 `MBObjectManager.RegisterType<T>` 的职责，不是存档类型定义器。
- 给 definer 分配与其它模组重叠的 `saveBaseId`，或给已发布类型改 `localId`——这会破坏旧档。

## 依赖图

- 上游执行入口：[SaveManager](../SaveManager) 在 `InitializeGlobalDefinitionContext` 中构建 [DefinitionContext](../DefinitionContext) 并自动收集所有 definer；真正读写字节流的是 [ArchiveSerializer](../ArchiveSerializer) 与 [ArchiveDeserializer](../ArchiveDeserializer)。
- 成员标注契约：[SaveableRootClassAttribute](../SaveableRootClassAttribute)（标记存档根）、[SaveableFieldAttribute](../SaveableFieldAttribute) / [SaveablePropertyAttribute](../SaveablePropertyAttribute)（标记成员及其 `LocalSaveId`）。
- 旧版本迁移：通过 [IConflictResolver](../IConflictResolver) 与 [IObjectResolver](../IObjectResolver) 在 `DefineConflictResolvers` / `AddClassDefinition` 中声明。
- 容器与基础类型：登记结果沉淀到 [ContainerDefinition](../ContainerDefinition)、[TypeDefinition](../TypeDefinition)、[StructDefinition](../StructDefinition)、[EnumDefinition](../EnumDefinition) 与 [InterfaceDefinition](../InterfaceDefinition)。

## 风险

- **`saveBaseId` 冲突。** helper 实际把基准与局部编号相加得到最终保存编号；两个模组若 `baseId` 范围重叠且局部 `localId` 撞车，会产生相同类型保存编号，导致定义冲突或把数据解析进错误类型。为模组预留一个明确且唯一的 `baseId` 区间并**永久固定**。
- **已发布类型的 `localId` 改动。** `AddClassDefinition(typeof(T), 1)` 里的 `1` 是持久化的类型身份。发布后不要为了排序好看而重排，也不要复用别人的 id。
- **遗漏容器定义。** 字段若是 `List<T>` / `Dictionary<K,V>` / 数组而没有对应的 `ConstructContainerDefinition`，`DefinitionContext` / `SaveManager` 的类型检查会报告「未定义类型」，自定义字段永不落盘。
- **把 Attribute 当自动注册。** 仅仅给字段/属性打 `[SaveableField]` 不会生成类定义；同样，definer 也不会替你把类加进 `MBObjectManager` 的 XML 类型表。
- **改签名而不考虑旧档。** 删除类、改字段类型、改 `LocalSaveId`、换 resolver 都会影响旧存档；需要兼容 resolver 或新成员 + 迁移策略。
- **在定义阶段执行游戏逻辑。** `Define*` 方法用于建表，不应访问 `Campaign.Current`、创建 `Hero` 或触发事件——那些对象在定义阶段尚未初始化。
- **误读加载顺序。** `SaveManager.Load` 会重新建立当前版本的定义表；`LoadContext` 先创建对象、解析引用、填充字段/属性，再运行初始化与 late 初始化回调。字段可能在对象之间并行填充，不能在构造函数或过早的事件里假设读到完整状态。

## 成员说明

### 构造函数

- `protected SaveableTypeDefiner(int saveBaseId)`：唯一的构造函数，子类用 `: base(稳定BaseId)` 调用。这个 `saveBaseId` 是所有 `Add*` helper 编号的偏移基准。

### 定义阶段重写点（均为 `protected internal virtual`，空实现可留空）

- `DefineBasicTypes()`：用 `AddBasicTypeDefinition` 注册基础类型及其 `IBasicTypeSerializer`（如 `MBGUID`）。
- `DefineClassTypes()`：用 `AddClassDefinition` / `AddClassDefinitionWithCustomFields` 注册普通引用类型。
- `DefineStructTypes()`：用 `AddStructDefinition` / `AddStructDefinitionWithCustomFields` 注册值类型（struct）。
- `DefineEnumTypes()`：用 `AddEnumDefinition` 注册枚举，可选传入 `IEnumResolver`。
- `DefineInterfaceTypes()`：用 `AddInterfaceDefinition` 注册接口（用于多态成员按实现类型还原）。
- `DefineRootClassTypes()`：用 `AddRootClassDefinition` 注册存档对象图的**根类**（如 `Game` / `Campaign`）。
- `DefineGenericClassDefinitions()` / `DefineGenericStructDefinitions()`：用 `ConstructGenericClassDefinition` / `ConstructGenericStructDefinition` 注册泛型类型（如 `PropertyOwner<SkillObject>`、`Tuple<int,int>`）。
- `DefineContainerDefinitions()`：用 `ConstructContainerDefinition` 注册 `List<T>`、`Dictionary<K,V>`、数组等容器。
- `DefineConflictResolvers()`：用 `AddConflictResolver(localId, resolver)` 为旧版本类型编号声明迁移映射。

### 登记 helper（由 `Define*` 调用）

- `AddClassDefinition(Type type, int saveId, IObjectResolver resolver = null)`：把引用类型加入上下文，最终保存编号为 `_saveBaseId + saveId`。
- `AddClassDefinitionWithCustomFields(Type type, int saveId, IEnumerable<Tuple<string, short>> fields, IObjectResolver resolver = null)`：在类定义上追加自定义字段（名称 + `LocalSaveId`）。
- `AddStructDefinition(Type type, int saveId, IObjectResolver resolver = null)` / `AddStructDefinitionWithCustomFields(...)`：登记结构类型。
- `AddRootClassDefinition(Type type, int saveId, IObjectResolver resolver = null)`：登记存档根类。
- `AddInterfaceDefinition(Type type, int saveId)`：登记接口定义。
- `AddEnumDefinition(Type type, int saveId, IEnumResolver enumResolver = null)`：登记枚举定义。
- `AddBasicTypeDefinition(Type type, int saveId, IBasicTypeSerializer serializer)`：登记基础类型及其序列化器。
- `AddConflictResolver(int saveId, IConflictResolver conflictResolver)`：为旧版本局部编号挂接冲突解决器。
- `ConstructGenericClassDefinition(Type type)` / `ConstructGenericStructDefinition(Type type)`：构建泛型类/结构定义。
- `ConstructContainerDefinition(Type type)`：构建容器定义；若该类型已有定义会被 `Debug.FailedAssert` 报「重复定义」。`type` 取自 `GetType().Assembly`，因此容器定义只在当前 definer 所在程序集内解析。
- `internal void Initialize(DefinitionContext definitionContext)`：引擎在收集阶段调用，把 `DefinitionContext` 注入 definer；不是给模组重写的扩展点。

> **稳定性契约：** 所有 `Add*` / `Construct*` 方法的 `saveId` 参数都是**相对**于构造函数的 `saveBaseId` 的局部编号，引擎最终以 `_saveBaseId + saveId` 作为该类型在存档中的稳定身份。这也是「坏档」最常见的根因——编号一旦随版本漂移，旧档里的字节就无法映射到正确的类型或字段。

## 示例

下面的 `MyModTypeDefiner` 演示了最小可用的自定义类型注册：构造函数给定稳定 `baseId`，在 `DefineClassTypes` 里登记类，在 `DefineContainerDefinitions` 里登记它用到的 `Dictionary`。注意你**不需要**手动实例化或「注册」这个 definer——只要它位于引用 `TaleWorlds.SaveSystem` 的程序集中，引擎在初始化全局定义上下文时会通过反射自动发现并收集它：

```csharp
// 自定义序列化定义器：构造函数里必须给定稳定 baseId，且勿与别的模组冲突
public class MyModTypeDefiner : SaveableTypeDefiner
{
    // 选一个不会和官方/其它模组重叠的高位 baseId 并永久固定
    public MyModTypeDefiner() : base(987654) { }

    protected override void DefineClassTypes()
    {
        // localId = 1；最终存档编号为 987654 + 1
        AddClassDefinition(typeof(MyCampaignData), 1);
    }

    protected override void DefineContainerDefinitions()
    {
        // 字段若是字典/列表/数组，必须登记容器定义，否则类型检查会报未定义
        ConstructContainerDefinition(typeof(Dictionary<string, MyCampaignData>));
    }
}

// 引擎在游戏启动时调用的真实入口（无需模组手动 new definer）：
// SaveManager.InitializeGlobalDefinitionContext() 会 FillWithCurrentTypes()，
// 其内部通过反射收集所有非抽象 SaveableTypeDefiner 子类并逐个 Initialize + Define*。
SaveManager.InitializeGlobalDefinitionContext();
List<Type> missing = SaveManager.CheckSaveableTypes(); // 找出被 [Saveable*] 标记却无定义的字段类型
```

官方模组就是这套模式：`SaveableObjectSystemTypeDefiner` 用 `base(10000)`，在 `DefineBasicTypes` 登记 `MBGUID`（`AddBasicTypeDefinition(typeof(MBGUID), 1005, ...)`），在 `DefineClassTypes` 登记 `MBObjectBase`（`AddClassDefinition(typeof(MBObjectBase), 34)`）；`SaveableLocalizationTypeDefiner` 用 `base(20000)`，登记 `TextObject` 与 `Dictionary<string, TextObject>`；`SaveableCampaignTypeDefiner` 用 `base(330000)`，登记 `Campaign`、`Hero`、`MobileParty` 等上百个类型与大量容器。`SaveableCoreTypeDefiner` 同样以 `base(10000)` 登记装备/物品/角色相关类型——可见官方用 `saveBaseId` 划出编号段、局部 `localId` 区分类型，正是你应该模仿的稳定契约写法。

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[SaveManager](../SaveManager) · [DefinitionContext](../DefinitionContext) · [SaveableFieldAttribute](../SaveableFieldAttribute) · [ArchiveSerializer](../ArchiveSerializer) · [IConflictResolver](../IConflictResolver)
