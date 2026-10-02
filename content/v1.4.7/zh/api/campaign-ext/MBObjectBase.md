---
title: "MBObjectBase"
description: "所有 MBObject 派生类型的根基类：承载 StringId、MBGUID 与「已初始化 / 已就绪」状态，并定义反序列化与加载前后回调的生命周期钩子。自定义静态数据类型的标准起点。"
---
# MBObjectBase

**命名空间：** `TaleWorlds.ObjectSystem`
**模块：** `TaleWorlds.ObjectSystem`
**类型：** `public class MBObjectBase`
**基类：** 无
**源文件：** `TaleWorlds.ObjectSystem/MBObjectBase.cs`（声明见第 11 行）

## 概述

`MBObjectBase` 是整个游戏「静态定义型数据」的根基类。兵种（`CharacterObject`）、道具（`ItemObject`）、装备（`Equipment`）、技能、特质、制作配方、舰船、以及所有 mod 自定义定义，最终都继承自它。它由 [MBObjectManager](../MBObjectManager) 统一注册与实例化，本身不持有任何游戏逻辑——它持有的是**身份**（`StringId` 与 `MBGUID Id`）、**生命周期状态**（`IsInitialized` / `IsReady`），以及一整套**反序列化回调**。

那套回调是理解这个类最关键的部分。数据不是通过构造函数构造的，而是被 `MBObjectManager` 从 XML 反射式地填充字段；填充完成后引擎依次调用 `AfterInitialized()` → `OnRegistered()`；读档时则在对象图重建完成后调用 `PreAfterLoadInternal()` / `AfterLoadInternal()`。派生类要做的绝大多数工作（引用另一个定义、算派生属性、注册进某个表）都挂在这几个钩子上，而不是构造函数里。

`GetName()` 是 UI 侧统一的取名入口——想要一个通用的「显示这个定义叫什么」能力，调用它而不是自己判断类型。

## 心智模型

把它想成**一个由数据填充器（而不是 `new`）构造的对象模板**。三个心智要点：

1. **构造函数只跑一次，而且不代表「数据已到位」。** `MBObjectBase(string stringId)` 只是设了个 ID。真正的字段值由 `Deserialize(MBObjectManager, XmlNode)` 填。所以**任何依赖字段值的初始化都必须放在 `AfterInitialized()` 里**，写在构造函数里会读到默认值。
2. **`IsInitialized` 与 `IsReady` 是两个不同的门槛。** `IsInitialized`（`internal set`）表示反序列化结束；`IsReady` 是可写的「就绪」标志，很多派生类用它表示「依赖的对象都解析好了」。UI 引用一个 `IsReady == false` 的对象时，行为是未定义的——**先判 `IsReady` 再用**。
3. **读档不走 `Deserialize`。** 反序列化只发生在 XML 加载。读档时对象由存档系统直接构造并回填字段，因此走的是 `PreAfterLoad` / `AfterLoad` 一对钩子。**把初始化逻辑只写在 `AfterInitialized` 里，会导致读档后状态缺失**——这是自定义 MBObject 最常见的 bug。

`AfterLoad` 与 `PreAfterLoad` 都是 `protected virtual`，外部不能直接调；引擎通过 `PreAfterLoadInternal()` / `AfterLoadInternal()` 这两个 public 包装来调用它们。

## 何时使用 / 何时不要使用

- **使用**：定义一个可从 XML 加载的自定义数据（装备、道具、配方、单位变体）。
- **使用**：在 `AfterLoad()` 里把「引用别的对象」的字段接上（因为此时整个对象图已经存在）。
- **使用**：通过 `GetName()` 统一取显示名，而不是自己写类型分支。
- **不要**：在构造函数里读自己的字段做初始化——字段还没被填。
- **不要**：在 `OnRegistered()` 里做重活——那是「注册表已接纳」的通知，不是「数据已完备」的信号。
- **不要**：手动调用 `PreAfterLoadInternal()` / `AfterLoadInternal()`。它们由引擎按读档流程调用，手动调会破坏对象图的一致性。

## 成员说明

### 身份与状态

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `string StringId { get; set; }` | XML 中定义的稳定标识。跨存档 / 跨 mod 引用都靠它，**改动等于破坏兼容性**。 |
| `MBGUID Id { get; set; }` | 运行时唯一标识。存档引用解析依赖它；引擎自动分配，不要自己写。 |
| `bool IsInitialized { get; internal set; }` | 反序列化是否已完成。`internal set` 表示 mod 只能读。 |
| `bool IsReady { get; set; }` | 是否「可用」。派生类用它表示依赖已解析。**UI 与逻辑取用前应先判它**。 |
| `MBObjectBase()` | 默认构造函数。用于运行时动态创建（配合 `MBObjectManager.CreateObject<T>()`）。 |
| `MBObjectBase(string stringId)` | 指定 StringId 的构造函数。 |
| `MBObjectBase(MBObjectBase other)` | 拷贝构造函数。做「复制一份定义」时用。 |

### 生命周期钩子

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `virtual void Initialize()` | 反序列化前的初始化钩子。 |
| `virtual void Deserialize(MBObjectManager objectManager, XmlNode node)` | **核心覆写点**。从 XML 节点读取字段。参数里的 `objectManager` 用于解析对其它 MBObject 的引用。默认值实现是反射式的——只有当反射映射不够用时才需要覆写。 |
| `void AfterInitialized()` | 反序列化完成、`Initialize()` 之后调用。此刻**本对象**的字段已填好，但**它引用的其它对象可能还没初始化完**。 |
| `virtual void AfterRegister()` | 注册到 `MBObjectManager` 之后调用。适合把对象登记进本类型的静态表。 |
| `void OnRegistered()` | 通知「已进入注册表」。 |
| `void OnUnregistered()` | 通知「已从注册表移除」。**在此之后对象不应再被引用**。 |
| `protected virtual void OnBeforeLoad()` | 读档流程中，载入前调用。可在此清掉需要重建的缓存。 |
| `protected virtual void PreAfterLoad()` | 读档的「前加载」钩子——此时对象字段已回填，但整个对象图还没连通。 |
| `void PreAfterLoadInternal()` | 引擎调用 `PreAfterLoad()` 的 public 包装。**mod 不要直接调用**。 |
| `protected virtual void AfterLoad()` | 读档的「后加载」钩子——**整个对象图已经存在**。引用接续、缓存重建都放这里。 |
| `void AfterLoadInternal()` | 引擎调用 `AfterLoad()` 的 public 包装。**mod 不要直接调用**。 |

### 实用方法

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `virtual TextObject GetName()` | 返回本地化显示名。**统一的取名入口**；UI 与日志应优先调用它而不是自己 switch。 |
| `override int GetHashCode()` | 覆写自 `object`，让同一 StringId 的两个实例行为一致，便于放进字典。 |

## 示例

### 示例 1：一个最小的自定义 MBObject 派生类型

注意初始化只写在 `AfterInitialized` / `AfterLoad`，构造函数里什么都不做。

```csharp
using System.Xml;
using TaleWorlds.Localization;
using TaleWorlds.ObjectSystem;

public class MyItemDef : MBObjectBase
{
    public int Price = 0;
    public string BaseId = "";

    public MyItemDef(string stringId) : base(stringId) { }

    // 仅当反射映射不够用时才需要覆写 Deserialize
    public override void Deserialize(MBObjectManager objectManager, XmlNode node)
    {
        base.Deserialize(objectManager, node);
        BaseId = node.Attributes["base_id"]?.Value ?? "";
    }

    // 反序列化结束：此刻自己的字段已填好
    public override void Initialize() { }

    // 读档后：此刻整个对象图都已存在，适合接引用
    protected override void AfterLoad()
    {
        base.AfterLoad();
    }

    public override TextObject GetName()
    {
        return new TextObject("{=MyMod.MyItemDefName}" + StringId);
    }
}
```

### 示例 2：注册并取用自定义定义

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.ObjectSystem;

public class MySubModule : MBSubModuleBase
{
    protected override void RegisterSubModuleTypes()
    {
        base.RegisterSubModuleTypes();
        // 子模块的类型注册走 RegisterSubModuleTypes，管理器从单例取
        MBObjectManager.Instance.RegisterType<MyItemDef>("MyItemDef", "MyItemDefs", 9101u, true);
    }

    protected override void OnGameInitializationFinished(Game game)
    {
        base.OnGameInitializationFinished(game);

        // 先判就绪，再取用
        MyItemDef def = MBObjectManager.Instance.GetObject<MyItemDef>("my_item_def_01");
        if (def != null && def.IsReady)
        {
            TextObject display = def.GetName();
        }
    }
}
```

### 示例 3：在读档后接引用

`AfterLoad` 里解析跨对象引用，是 MBObject 最典型的用法。

```csharp
using TaleWorlds.ObjectSystem;

public class MyItemSetDef : MBObjectBase
{
    // 引用另一个定义，需要在 AfterLoad 里接上
    public MBObjectBase ReferencedDef;

    public MyItemSetDef(string stringId) : base(stringId) { }

    protected override void AfterLoad()
    {
        base.AfterLoad();

        // 此刻对象图已存在，可以安全按 StringId 解析引用
        ReferencedDef = MBObjectManager.Instance.GetObject<MyItemDef>(StringId + "_base");
    }
}
```

## 风险与边界

- **构造函数不等于初始化**。字段由 `Deserialize` 填充，构造函数里读到的一定是默认值（`0` / `null` / `false`）。把初始化写在构造函数里是自定义 MBObject 最常见的错误。
- **`AfterInitialized` 里引用的对象可能未就绪**。XML 反序列化有顺序，父节点先于子节点完成。如果 `A` 的 `AfterInitialized` 需要 `B` 的字段，`B` 可能还没填好。跨类型依赖一律放到 `AfterLoad`。
- **`IsReady` 由派生类负责**。基类只提供可写属性。若你的类型有外部依赖，请在依赖就绪后显式设 `IsReady = true`；否则 UI 可能在数据不全时取用它。
- **`OnUnregistered` 之后的引用是悬空的**。`MBObjectManager.UnregisterObject` / `RemoveTemporaryTypes` / `Destroy` 之后仍持有该实例，会在读属性时抛异常或读到垃圾。
- **不要手动调 `PreAfterLoadInternal` / `AfterLoadInternal`**。它们假定对象图已经由存档系统搭好；手动调用会让 `AfterLoad` 在错误时机执行。
- **`StringId` 改动破坏存档与 mod 兼容性**。它同时是 XML 标识、存档引用键和跨 mod 契约。改名等于换类型。
- **单线程 + 加载期约束**：`Deserialize` / `AfterInitialized` / `AfterLoad` 全部在加载流程的主线程上执行，且期间游戏世界尚未成形——此时访问 `Campaign.Current` 或 `Mission.Current` 必然失败。
- **`MBGUID Id` 由引擎分配**。自己写会在注册表里造成 ID 冲突，症状是存档引用解析到错误对象。

## 依赖关系

- 上游 / 提供者：
  - [MBObjectManager](../MBObjectManager) 注册、实例化并驱动本类的完整生命周期；`Game` 在启动时创建该管理器。
  - [MBSubModuleBase](../../core/MBSubModuleBase) 的 `OnRegisterTypes` 是子类注册类型的时机。
- 相互 / 下游：
  - [Game](../../core-extra/Game) 的 `ObjectManager` 属性直接暴露本类实例的管理者。
  - [Campaign](../../campaign/Campaign) 的 `OnRegisterTypes` 注册战役层的全部 MBObject 派生类型。
  - 存档侧 [LoadContext](../../save-system/LoadContext) / [SaveContext](../../save-system/SaveContext) 负责 MBObject 引用的写入与解析。

## 参见

- ↑ 父级：campaign-ext 目录下没有索引页；本目录只有两个页面——本页 `MBObjectBase` 与 [MBObjectManager](../MBObjectManager)。
- ↔ 相关：[MBObjectManager](../MBObjectManager) · [Game](../../core-extra/Game) · [MBSubModuleBase](../../core/MBSubModuleBase) · [Campaign](../../campaign/Campaign)