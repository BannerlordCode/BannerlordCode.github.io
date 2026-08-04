---
title: "SaveableTypeDefiner"
description: "Bannerlord 存档的程序集发现式定义注册器：保留类型 ID 区间、描述可存档类型与容器，并让 SaveManager 在序列化前建立 DefinitionContext。"
---

# SaveableTypeDefiner

**Namespace:** `TaleWorlds.SaveSystem`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `public abstract class SaveableTypeDefiner`  
**Base:** `System.Object`  
**Source:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveableTypeDefiner.cs`

## 职责

为这个 definer 注册的一组类型选择稳定的存档 ID 区间，并据此登记可出现在持久化对象图中的类型、封闭泛型和容器；它把 CLR 类型身份交给 `DefinitionContext`，使 `SaveManager` 能在真正遍历对象图之前建立一致且可验证的存档 schema。区间不是程序集自动独占的资源：不同 definer 可能使用相同基址，因此基址与本地 ID 必须在全局定义集合中协调。

## 心智模型

`SaveableTypeDefiner` 是启动期元数据，不是存档服务，也不是游戏运行中获取的对象。具体 definer 必须有无参构造函数，由已加载程序集中的 [DefinitionContext](../DefinitionContext) 发现。定义初始化时它在内部得到该 context；随后各个钩子描述 CLR 类型如何映射为存档定义。真正存档或读档时，流水线再使用这些定义理解对象图。

必须分清两层 ID：

- definer 给**类型**分配 `TypeSaveId`：每个 `Add*Definition` helper 都把本地 `saveId` 加到构造函数传入的 `saveBaseId`。
- `[SaveableField(localId)]` 与 `[SaveableProperty(localId)]` 给单个成员分配**成员本地** ID。类型注册完成后，[TypeDefinition](../TypeDefinition) 反射这些 attribute，并把本地 ID 与声明类层级组合起来。
- `[SaveableRootClass(id)]` 标记根类身份。引擎中的 [Game](../../core/Game) 带有 `[SaveableRootClass(5000)]`，但 `SaveableCoreTypeDefiner.DefineRootClassTypes()` 仍会在 base ID `10000` 下调用 `AddRootClassDefinition(typeof(Game), 4001)`。根类标记不能代替类型定义注册。

只有当可存档成员可能到达现有全局定义没有覆盖的类型时，才需要写 definer。普通战役功能的少量状态应优先走 [SaveManager](../SaveManager) 所述的战役持久化路径，而不是为了一个 primitive 或 Behavior 私有值新建 definer。不要在正常 mod 运行期手动实例化 definer、构造 `DefinitionContext` 或重置 `SaveManager`：这些是引擎持有的初始化操作，并不存在公开的获取路径。

## 生命周期与所有权

`SaveManager.InitializeGlobalDefinitionContext()` 创建全局 context 并调用 `FillWithCurrentTypes()`：

1. `DefinitionContext` 收集 SaveSystem 自身程序集，以及所有引用它的已加载程序集。
2. 它找出每个非 abstract 的 `SaveableTypeDefiner`，用 `Activator.CreateInstance` 创建实例，再调用内部的 `Initialize(context)`。
3. 它按**全部**已发现 definers 的顺序调用钩子：basic、class、struct、interface、enum、root class、generic struct、generic class、container，最后 conflict resolver。
4. 它让已注册的 [TypeDefinition](../TypeDefinition) 收集 load callback、`[SaveableProperty]` 和 `[SaveableField]` 成员；定义错误会留在 context 中。
5. 它发现并初始化 generated save manager。`SaveManager.Save(...)` 若全局 context 有错误便不会开始对象图序列化；`Load(...)` 则为本次读取创建新的 context。

下面是实际引擎入口，仅用来说明所有权，**不是** mod 启动时应调用的公开路径：

```csharp
// TaleWorlds.SaveSystem.SaveManager
public static void InitializeGlobalDefinitionContext()
{
    _definitionContext = new DefinitionContext();
    _definitionContext.FillWithCurrentTypes();
    foreach (string error in _definitionContext.Errors)
    {
        Debug.Print(error);
    }
}
```

全局发现意味着没有 `SaveManager.Register(...)` 这样的公开注册 API。程序集必须已经加载并引用 `TaleWorlds.SaveSystem`，其中的具体 definer 必须能被扫描器构造。不要凭空编造源码没有提供的运行期获取或注册路径。

## 构造函数与定义钩子

### `SaveableTypeDefiner(int saveBaseId)`

构造函数保存此 definer 的数字命名空间基址。一个 `base(20000)` 的 definer 调用 `AddClassDefinition(typeof(TextObject), 1)`，最终类型存档 ID 就是 `20001`。这个基址是持久化兼容性边界，不是分类标签；发布后应保持不变，并有计划地分配本地 ID。

```csharp
// TaleWorlds.Localization.SaveableLocalizationTypeDefiner
public SaveableLocalizationTypeDefiner()
    : base(20000)
{
}
```

| 钩子 | `DefinitionContext` 调用时机 | 适用对象 |
|---|---|---|
| `DefineBasicTypes()` | 最先 | 带 `IBasicTypeSerializer` 的 CLR/basic 值 |
| `DefineClassTypes()` | basic 后 | 普通引用类型与 class custom field |
| `DefineStructTypes()` | class 后 | 值类型与 struct custom field |
| `DefineInterfaceTypes()` | struct 后 | interface 定义 |
| `DefineEnumTypes()` | interface 后 | enum，可选 `IEnumResolver` |
| `DefineRootClassTypes()` | enum 后 | 用 `AddRootClassDefinition` 注册对象图根 |
| `DefineGenericStructDefinitions()` | root 后 | 具体封闭的 struct 泛型实例 |
| `DefineGenericClassDefinitions()` | generic struct 后 | 具体封闭的 class 泛型实例 |
| `DefineContainerDefinitions()` | generic definition 后 | 元素/键/值类型已定义的 array、list、queue、dictionary |
| `DefineConflictResolvers()` | 最后 | 旧存档 ID 的兼容映射 |

调用顺序解释了一个常见失败：`ConstructContainerDefinition(typeof(Dictionary<string, TextObject>))` 需要 `string` 和 `TextObject` 在构造 container 之前已有定义。因此可以在同一个 `DefineContainerDefinitions()` 中先登记依赖、再构造 container，但不能在依赖尚未登记时构造，也不能重复注册同一个 container。

## 注册 helper 与副作用

- `AddBasicTypeDefinition`、`AddClassDefinition`、`AddStructDefinition`、`AddInterfaceDefinition`、`AddEnumDefinition`、`AddRootClassDefinition` 都以 `saveBaseId + saveId` 创建定义并加入 `DefinitionContext`。
- `AddClassDefinitionWithCustomFields` 和 `AddStructDefinitionWithCustomFields` 还会附加显式的 `(fieldName, localId)` 映射。它们适用于无法在源码上标 attribute 的类型，例如引擎通用泛型工具类；并不会取消稳定成员 ID 的要求。
- `ConstructGenericClassDefinition` 与 `ConstructGenericStructDefinition` 从较早 hook 中已有的泛型定义物化一个**封闭**泛型实例；它们不是泛型通配注册。
- `ConstructContainerDefinition` 从元素、键和值的定义推导 container save ID。对于 `List<T>`，context 还会注册兼容的 `MBList<T>` 与 `MBReadOnlyList<T>`。它先检查 `HasDefinition(type)`；重复 container 会触发 `Debug.FailedAssert`。
- `AddConflictResolver` 仅在 resolver 的新目标类型已有 class definition 时，才以 `saveBaseId + saveId` 注册 resolver。它最后运行，因此目标类已经可解析。

其余 `Add*` helpers 最终写入按 CLR `Type` 和 `SaveId` 索引的 dictionary；重复类型或重复 ID 会在构建 context 时失败，而不是安全地覆盖旧定义。所有 type ID、custom-field ID 和 resolver ID 都应被视为已持久化的数据。

## 引擎中的具体定义

本地化 definer 是一个紧凑的真实示例。它保留 `20000`，令 `TextObject` 的 type ID 为 `20001`，再在 class hook 已完成后定义 `Dictionary<string, TextObject>` container：

```csharp
using System.Collections.Generic;
using TaleWorlds.SaveSystem;

namespace TaleWorlds.Localization;

public class SaveableLocalizationTypeDefiner : SaveableTypeDefiner
{
    public SaveableLocalizationTypeDefiner()
        : base(20000)
    {
    }

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

`TaleWorlds.ObjectSystem.SaveableObjectSystemTypeDefiner` 使用 `base(10000)`，在本地 ID `1005` 处用 `MBGUIDBasicTypeSerializer` 注册 basic type `MBGUID`，在本地 ID `34` 处注册 class `MBObjectBase`。`TaleWorlds.Core.SaveableCoreTypeDefiner` 也使用同一 base；这说明共享 ID 区间的所有定义必须协调本地 type ID，不能按单个类猜测编号。

## 类型定义与成员 attribute 的边界

定义和 attribute 回答的是不同问题：

| 层 | 回答的问题 | 引擎证据 |
|---|---|---|
| Definer / `DefinitionContext` | 这个运行期类型、泛型实例或容器能否出现在对象图中？它的 type ID 是什么？ | `AddClassDefinition`、`ConstructGenericClassDefinition`、`ConstructContainerDefinition` |
| 根注册 | 哪个已注册的 class 可以作为存档对象图的起点？ | `SaveableCoreTypeDefiner` 中的 `AddRootClassDefinition(typeof(Game), 4001)` |
| Field/property attribute | 已注册 class/struct 的哪些实例成员会序列化？它们的本地 ID 是什么？ | `Game` 上的 `[SaveableField(11)]` 与 `[SaveableProperty(3)]`、`(8)`、`(12)` |

`TypeDefinition.CollectProperties()` 与 `CollectFields()` 在注册后扫描 public/non-public instance member。重复 `MemberTypeId` 会被记为 context error。给 field 加标记不会定义其 field type；定义 class 也不会自动保存所有 field：两边的契约都必须成立。

## 风险边界

- **base ID 或本地 type ID 冲突：** 两个注册若落到同一个 `Type` 或最终 `SaveId`，会冲突 `DefinitionContext` 的 dictionary。重复 container 还会触发 `Debug.FailedAssert`。存档流水线会得到定义错误，或在产生可信存档前失败。
- **改动已持久化 ID：** 改 `saveBaseId`、本地 type ID、custom-field ID 或 `[SaveableField]`/`[SaveableProperty]` 的 local ID，都会改变旧存档的 schema。改成员名不等于保留 ID；发布过的标识符变更前必须先设计明确兼容策略。
- **不支持的对象图：** 一个被标记成员的类型、封闭泛型或 container 若没有定义，便无法被正确表示。`SaveManager.CheckSaveableTypes()` 可以找出未注册的 attribute field/property type；container 也要求其组成类型先定义。
- **重复定义与错误时机：** definer 会在全局范围内与引擎和其他 mod definer 一起发现。不要二次注册 engine type 或共享 container，也不要在 `DefinitionContext.FillWithCurrentTypes()` 已收集成员元数据后再试图添加定义。

## 依赖与导航

- **上游：** [SaveManager](../SaveManager) 创建全局 context；[DefinitionContext](../DefinitionContext) 发现并调用 definer。
- **下游：** [TypeDefinition](../TypeDefinition) 在类型注册后收集 attribute 成员；[SaveableFieldAttribute](../SaveableFieldAttribute) 与 [SaveablePropertyAttribute](../SaveablePropertyAttribute) 提供成员本地 ID。
- **根类示例：** [Game](../../core/Game) 与 [SaveableRootClassAttribute](../SaveableRootClassAttribute)。

## 导航

- 上级： [存档系统目录](../)
- 同级： [SaveManager](../SaveManager) 与 [DefinitionContext](../DefinitionContext)
- 相关： [TypeDefinition](../TypeDefinition)、[SaveableFieldAttribute](../SaveableFieldAttribute)、[SaveablePropertyAttribute](../SaveablePropertyAttribute)、[SaveableRootClassAttribute](../SaveableRootClassAttribute)、[Game](../../core/Game)
