---
title: "MBObjectBase"
description: "TaleWorlds.ObjectSystem 中可注册游戏对象的根基类：提供 StringId、MBGUID、XML 初始化和读档生命周期。"
---
# MBObjectBase

**Namespace:** `TaleWorlds.ObjectSystem`  
**Module:** `TaleWorlds.ObjectSystem`  
**Type:** `public class MBObjectBase`  
**Base:** `System.Object`  
**Source:** `TaleWorlds.ObjectSystem/MBObjectBase.cs`

## 概述

`MBObjectBase` 是由 [MBObjectManager](../MBObjectManager/) 登记、按 ID 查询、从 XML 创建，并可能作为对象引用进入存档的根类。`Hero`、`ItemObject`、`Settlement`、`Clan`、`Kingdom`、`MobileParty` 等世界对象都沿着这条路线进入游戏对象表。

它不是一个让 mod 直接 `new` 后随意使用的业务基类。真正的职责是把一个对象接入三条基础契约：

1. `StringId` 是 XML 和 `GetObject<T>(string)` 使用的逻辑身份。
2. `Id` 是本次会话中由对象管理器分配的 `MBGUID`，用于对象图中的内部引用。
3. `Initialize`、`Deserialize`、`AfterRegister`、`OnBeforeLoad`、`PreAfterLoad`、`AfterLoad` 把 XML 加载和存档恢复拆成可重写的阶段。

## 心智模型

把它当作“对象名册中的一张登记卡”，而不是普通 DTO。对象被注册后，管理器同时维护按 `StringId` 的表、按 `MBGUID` 的表和按类型的列表；`OnRegistered` 才会把对象标为已登记并调用 `AfterRegister`。XML 路径先创建或取得 presumed 对象，再调用 `Deserialize` 和 `AfterInitialized`。如果对象始终没有变为 ready，`UnregisterNonReadyObjects` 会把它清掉。

`StringId` 是稳定的 mod 代码入口，`Id` 不是跨加载的业务键。跨存档保存关联时应保存可重建的对象引用或 `StringId`，不要在静态字段中缓存上一局的对象实例。

## 获取与生命周期

通常通过管理器取得已登记对象：

```csharp
MBObjectManager objects = MBObjectManager.Instance;
Hero lord = objects.GetObject<Hero>("lord_1");
ItemObject sword = objects.GetObject<ItemObject>("iron_sword_t2");

if (lord != null && sword != null && lord.IsReady)
{
    TextObject message = new TextObject("{=mod_found}Found {ITEM} for {HERO}.");
    message.SetTextVariable("ITEM", sword.Name);
    message.SetTextVariable("HERO", lord.Name);
    InformationManager.DisplayMessage(new InformationMessage(message.ToString()));
}
```

在 XML 加载中，基类 `Deserialize` 调用 `Initialize()` 并从 `id` 属性写入 `StringId`；子类应先调用 `base.Deserialize`，再读取自己的 XML 属性和对象引用。存档加载时，`OnBeforeLoad` 让对象回到管理器，`PreAfterLoad` 和 `AfterLoad` 则由管理器在所有类型恢复后统一分发。跨对象引用需要等到 `AfterLoad` 再解析。

## 可重写成员

| 成员 | 用途 | 适合做什么 |
| --- | --- | --- |
| `StringId` / `Id` | 逻辑身份 / 会话内 GUID | 查询对象、表达引用；不要把 `Id` 当版本稳定键 |
| `Initialize()` | 新建或 XML 对象的默认初始化 | 设置默认值；不要在这里假定所有引用对象已加载 |
| `Deserialize(MBObjectManager, XmlNode)` | 从 XML 填充对象 | 先调用基类，再读 XML；复杂引用延后到 `AfterLoad` |
| `AfterRegister()` | 注册完成后回调 | 做依赖已登记对象的初始化，避免递归注册 |
| `OnBeforeLoad()` | 二进制成员恢复前 | 做恢复前准备；不要把它当成所有对象已存在的阶段 |
| `PreAfterLoad()` / `AfterLoad()` | 全局恢复后的两个阶段 | 在 `AfterLoad` 中重新绑定跨对象运行时引用 |
| `GetName()` | 默认用 `StringId` 构造 `TextObject` | 需要本地化名称时由业务子类重写 |

## 真实示例：注册并创建自定义对象

下面的调用形状对应 `MBObjectManager.RegisterType<T>` 和 `CreateObject<T>(string)` 的真实 API。类型注册应放在游戏的 `OnRegisterTypes`/等价注册阶段；对象创建则放在对象类型已经登记之后。

```csharp
public sealed class RelicObject : MBObjectBase
{
    [SaveableField(1)]
    private int _discoveredCount;

    public RelicObject() { }

    public RelicObject(string stringId) : base(stringId) { }

    public void MarkDiscovered()
    {
        _discoveredCount++;
    }
}

// 在 Game.OnRegisterTypes 或对应的游戏类型注册阶段执行
MBObjectManager.Instance.RegisterType<RelicObject>(
    "Relic", "Relics", 220u, autoCreateInstance: false, isTemporary: false);

// 在类型注册完成后执行
RelicObject relic = MBObjectManager.Instance.CreateObject<RelicObject>("my_mod_relic_01");
relic.MarkDiscovered();
RelicObject sameRelic = MBObjectManager.Instance.GetObject<RelicObject>("my_mod_relic_01");
```

`[SaveableField]` 本身不会把新类型加入存档定义表；还需要 [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) 注册 `RelicObject`。如果对象只需要运行时存在，可以省略保存成员，但仍必须遵守对象注册和唯一 ID 规则。

## 风险与坏档边界

- **重复 `StringId` 不会保持原值。** `RegisterObject` 会从数字后缀继续寻找可用 ID 并改写对象的 `StringId`。因此使用 `my_mod_` 前缀，并在创建后使用对象实际的 `StringId`，不要假定冲突时会抛异常。
- **不要把 `MBGUID` 当持久业务 ID。** 它由管理器按类型和计数器分配，加载顺序或模块集合改变后不应作为外部关联键。
- **不要在 `Deserialize` 里过早解引用。** XML 中引用的对象可能尚未完整初始化；把字符串/延迟引用留到 `AfterLoad`，否则常见结果是 null 引用或读档顺序相关错误。
- **未完成的 presumed 对象会被清除。** 自定义 XML 或手动 `RegisterPresumedObject` 必须最终完成初始化，否则 `UnregisterNonReadyObjects` 会移除它。
- **保存编号属于类型契约。** 自定义字段要配唯一且稳定的 `LocalSaveId` 和 definer；改编号或把字段类型直接换掉，会让旧存档无法正确还原。
- **不要缓存跨局实例。** `ClearAllObjects` 会清空当前对象表；下一次加载应通过 `StringId` 或已由保存系统还原的引用重新取得对象。

## 跨版本提示

1.3.15 与 1.4.5 的 `MBObjectBase` 生命周期和 `MBObjectManager` 的注册、查询、XML 加载 API 基本一致。1.4.5 的源码还明确保留了 `AfterLoad` 与 `OnBeforeLoad` 两阶段。目标为两个版本时，依赖的具体派生类仍应分别确认是否存在；不要因为基类一致就假定模块类型表相同。

## 依赖关系

- 上游：[MBObjectManager](../MBObjectManager/) 负责类型注册、对象表和 XML 入口。
- 存档：[SaveableFieldAttribute](../../save-system/SaveableFieldAttribute/) 与 [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) 负责自定义成员的定义。
- 战役使用：[CampaignBehaviorBase](../CampaignBehaviorBase/) 是在战役生命周期中读取和修改已登记对象的常见宿主。
- 典型下游：[Hero](../../campaign/Hero/) 与 [ItemObject](../../core/ItemObject/) 说明具体对象的业务约束；消息文本可转到 [TextObject](../../localization/TextObject/)。

## 导航

- 父级：[campaign-ext API](./)
- 同级：[MBObjectManager](../MBObjectManager/) · [IDataStore](../IDataStore/)
- 相关：[SaveManager](../../save-system/SaveManager/) · [Campaign](../../campaign/Campaign/)
