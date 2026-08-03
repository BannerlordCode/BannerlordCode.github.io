---
title: "SaveableTypeDefiner"
description: "存档定义上下文的自动发现入口：为类型、根对象、泛型容器和兼容迁移分配稳定 SaveId。"
---
# SaveableTypeDefiner

**Namespace:** `TaleWorlds.SaveSystem`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `public abstract class SaveableTypeDefiner`  
**Base:** 无  
**源文件：** `TaleWorlds.SaveSystem/SaveableTypeDefiner.cs`（以 1.4.5 源码为语义依据）

## 职责

`SaveableTypeDefiner` 把一个程序集/模块拥有的类型加入保存系统的 `DefinitionContext`。它不保存实例数据，也不替代 [IDataStore](../campaign-ext/IDataStore)。它定义“类型如何被识别、成员用哪些编号、容器如何构建”，而 [SaveManager](SaveManager) 在保存/加载时使用这些定义。

## 心智模型

每个 definer 是一张稳定的存档 schema 表：

1. 构造函数提供模块范围的 `saveBaseId`。
2. `DefineClassTypes`、`DefineStructTypes`、`DefineEnumTypes` 等重写方法声明类型。
3. `AddClassDefinition(typeof(T), saveId)` 等 helper 最终使用 `saveBaseId + saveId` 写入定义上下文。
4. 成员上的 [SaveableFieldAttribute](../SaveableFieldAttribute) / [SaveablePropertyAttribute](../SaveablePropertyAttribute) 再提供类型内部的 `LocalSaveId`。

因此 `saveBaseId`/`saveId` 和成员 `LocalSaveId` 都是兼容契约。一个模组可以在同一 definer 中定义多个类，但不能每次启动随机分配编号。

## 自动发现和固定阶段

`DefinitionContext.FillWithCurrentTypes()` 只收集 SaveSystem 程序集及引用它的程序集；它不是对所有当前程序集的无条件扫描。它用无参构造函数创建非抽象 definer，然后按以下顺序对全部 definer 分阶段调用：

1. `Initialize(context)`。
2. `DefineBasicTypes`、`DefineClassTypes`、`DefineStructTypes`、`DefineInterfaceTypes`、`DefineEnumTypes`、`DefineRootClassTypes`。
3. `DefineGenericStructDefinitions`、`DefineGenericClassDefinitions`、`DefineContainerDefinitions`、`DefineConflictResolvers`。
4. 收集各类型的初始化回调、`[SaveableProperty]` 和 `[SaveableField]`，再汇总错误。

因此容器的元素、键和值必须在此前已有定义；`Define*` 只建表，不应访问 `Campaign.Current`、创建 Hero 或触发事件。

## 真实原生模式

1.4.5 源码中的 `SaveableObjectSystemTypeDefiner` 使用 `base(10000)`，在 `DefineBasicTypes` 中加入 `MBGUID`，在 `DefineClassTypes` 中调用 `AddClassDefinition(typeof(MBObjectBase), 34)`。`SaveableLocalizationTypeDefiner` 使用 `base(20000)`，注册 `TextObject` 并构建 `Dictionary<string, TextObject>` 容器。这说明 definer 同时覆盖基础类型、类和容器，而不是只登记带 Attribute 的字段。

## 何时使用 / 何时不要使用

**使用：**新增一个会进入 `SaveManager` 对象图的自定义类、结构、枚举、接口、基础类型或泛型容器时；尤其是配合 [SaveableFieldAttribute](../SaveableFieldAttribute) / [SaveablePropertyAttribute](../SaveablePropertyAttribute) 时。

**不要使用：**仅为 `CampaignBehaviorBase` 的几个字段创建 definer；那应使用 [IDataStore](../campaign-ext/IDataStore)。也不要用它注册 `MBObjectManager` 的 XML 对象类型；那是 [MBObjectManager](../campaign-ext/MBObjectManager) 的 `RegisterType<T>` 契约。

## 关键扩展点

| 方法 | 作用 |
| --- | --- |
| `DefineBasicTypes()` | 用 `AddBasicTypeDefinition` 注册基础类型和序列化器 |
| `DefineClassTypes()` | 用 `AddClassDefinition` 注册普通引用类型 |
| `DefineRootClassTypes()` | 用 `AddRootClassDefinition` 注册保存图根类 |
| `DefineStructTypes()` / `DefineEnumTypes()` / `DefineInterfaceTypes()` | 注册值类型、枚举和接口定义 |
| `DefineGenericClassDefinitions()` / `DefineGenericStructDefinitions()` | 通过 `ConstructGeneric...` 构建泛型定义 |
| `DefineContainerDefinitions()` | 用 `ConstructContainerDefinition` 注册 `List<T>`、`Dictionary<TKey,TValue>` 等容器 |
| `DefineConflictResolvers()` | 通过 `AddConflictResolver` 声明兼容冲突处理 |

## 真实示例：原生 Localization 定义器

```csharp
public class SaveableLocalizationTypeDefiner : SaveableTypeDefiner
{
    public SaveableLocalizationTypeDefiner() : base(20000) { }

    protected override void DefineClassTypes()
    {
        AddClassDefinition(typeof(TextObject), 1);
    }

    protected override void DefineContainerDefinitions()
    {
        ConstructContainerDefinition(typeof(Dictionary<string, TextObject>));
    }
}

```

这是 1.4.5 的真实声明：`base(20000)` 和类型 local ID `1` 共同形成类型 SaveId，具体字典形状另由 `ConstructContainerDefinition` 登记。模块初始化时由 [SaveManager](SaveManager) 建立定义上下文；mod 不应手动 `new` 这个 definer。原生 [SaveableCampaignTypeDefiner](../campaign-ext/SaveableCampaignTypeDefiner) 采用同一模式，并以 `base(330000)` 登记 Campaign 类型。

## 风险与防坏档

- **`saveBaseId` 冲突。** helper 实际把基准和局部编号相加；两个模块范围重叠会产生相同类型保存 ID，导致定义冲突或错误解析。为 mod 预留明确范围并固定它。
- **局部 `saveId` 改动。** `AddClassDefinition(typeof(T), 1)` 的 `1` 也是持久化类型身份；发布后不要为了排序随意重排。
- **遗漏容器定义。** 字段类型可能是 `List<T>` 或字典；没有相应容器定义，`DefinitionContext`/`SaveManager` 检查会报未定义类型。
- **把 Attribute 当自动注册。** 仅标记字段/属性不会生成类定义；同样，definer 也不会替你把类加入 `MBObjectManager` 的 XML 类型表。
- **改签名而不考虑旧档。** 删除类、改字段类型、改 `LocalSaveId` 或换 resolver 都会影响旧存档；需要兼容 resolver 或新版本成员和迁移策略。
- **在定义阶段执行游戏逻辑。** `Define...` 方法用于建表，不应访问 `Campaign.Current`、创建 Hero 或触发事件；那些对象可能尚未初始化。

- **误解读档顺序。** `SaveManager.Load` 会重新建立当前版本的定义表；`LoadContext` 先创建对象、解析引用、填充字段/属性，再运行初始化和 late 初始化回调。字段可能在对象之间并行填充，不能在构造函数或过早的事件中读取完整状态。

- **误把 resolver 当重编号工具。** `DefineConflictResolvers` 只应为明确的旧版本类型 ID 提供迁移映射；错误 resolver 会把旧数据送入错误类型。

## 跨版本提示

1.3.15 与 1.4.5 都提供相同的基类 helper 和阶段重写点。官方模块的 `saveBaseId`、类型局部编号和类型清单可能随版本增加；mod 应把自己的编号视为永久协议，不要复制某个版本官方编号范围。

## 依赖关系与导航

- 成员声明：[SaveableFieldAttribute](SaveableFieldAttribute) · [SaveablePropertyAttribute](SaveablePropertyAttribute)。
- 执行入口：[SaveManager](SaveManager) 构建 [DefinitionContext](DefinitionContext) 并报告定义错误。
- Behavior 另一条路线：[CampaignBehaviorBase](../campaign-ext/CampaignBehaviorBase) 和 [IDataStore](../campaign-ext/IDataStore)。
- 对象注册另一条路线：[MBObjectManager](../campaign-ext/MBObjectManager)。

- 父级：[save-system API](../)
- 同级：[SaveManager](SaveManager) · [SaveableFieldAttribute](SaveableFieldAttribute)
- 相关：[ContainerDefinition](ContainerDefinition) · [IConflictResolver](IConflictResolver) · [存档与崩溃边界](../../architecture/crash-boundaries)
