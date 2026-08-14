---
title: "MBObjectManager"
description: "TaleWorlds.ObjectSystem 的中央对象名册：登记类型、创建对象、按 StringId 查询，并驱动 XML 加载与清理。"
---
# MBObjectManager

**Namespace:** `TaleWorlds.ObjectSystem`  
**Module:** `TaleWorlds.ObjectSystem`  
**Type:** `public sealed class MBObjectManager`  
**Base:** `System.Object`  
**Source:** `TaleWorlds.ObjectSystem/MBObjectManager.cs`

## 概述

`MBObjectManager` 是 `MBObjectBase` 对象的中央名册。游戏类型先用 `RegisterType<T>` 声明某个 XML 元素对应的 C# 类型，之后 XML 加载器和 mod 代码再通过 `RegisterObject`、`CreateObject`、`GetObject` 和按类型列表访问这些实例。

它解决的是“对象进入世界并保持可查找”的问题，不是战役业务 Action，也不是任意对象的全局服务定位器。需要改变 Hero、Settlement 或 Kingdom 的业务状态时，应转到对应的 Action/Model；管理器只负责让你拿到正确对象。

## 心智模型

可以把它看成三张同步的表：

- 类型表：`RegisterType<T>(classPrefix, classListPrefix, typeId, ...)` 把 XML 名称、列表名称、类型编号和创建策略绑定起来。
- 身份表：每个已登记对象同时按 `StringId` 和 `MBGUID` 建索引。
- 类型列表：`GetObjectTypeList<T>()` 返回该类型已经登记的对象集合，供加载、遍历和诊断使用。

XML 加载通常先拿到 presumed 对象，调用 `Deserialize`，再调用 `AfterInitialized`。所有对象恢复后，管理器按类型广播 `PreAfterLoad` 和 `AfterLoad`。因此“对象已在表里”不等于“所有跨对象引用都已可用”。

## 如何获取

活动的对象管理器通常来自 `MBObjectManager.Instance`；游戏初始化阶段由 `MBObjectManager.Init()` 创建。mod 代码不应自行保存一份替代实例。

```csharp
MBObjectManager objects = MBObjectManager.Instance;
Hero mainHero = objects.GetObject<Hero>("main_hero");
Settlement town = objects.GetObject<Settlement>(s => s.IsTown);

if (mainHero != null && town != null)
{
    MBReadOnlyList<Hero> heroes = objects.GetObjectTypeList<Hero>();
    foreach (Hero hero in heroes)
    {
        if (hero.IsLord && hero.Clan != null)
        {
            TaleWorlds.Library.Debug.Print(hero.StringId);
        }
    }
}
```

按 `StringId` 的查询是最清晰的常用路径；谓词查询适合查“第一个满足条件的对象”，`GetObjects<T>(predicate)` 适合得到筛选集合。引用不存在时返回 `null`，不能假定模块 XML 一定提供目标对象。

## 关键 API

| API | 责任 | 使用时机 |
| --- | --- | --- |
| `Init()` / `Destroy()` | 创建或销毁管理器实例 | 由游戏生命周期控制，mod 不要随意重置 |
| `RegisterType<T>(...)` | 注册 `MBObjectBase` 派生类型和 XML 名称 | 游戏类型的 `OnRegisterTypes` 阶段 |
| `CreateObject<T>(string)` | 新建、赋 `StringId` 并登记对象 | 类型已登记后创建运行时对象 |
| `RegisterObject<T>(T)` | 登记已经构造的对象 | 需要自定义构造流程时使用 |
| `RegisterPresumedObject<T>(T)` | 登记 XML/恢复过程中的暂定对象 | 仅用于确实理解 presumed 生命周期的加载代码 |
| `GetObject<T>(string)` | 按逻辑 ID 查询 | 已知稳定 `StringId` 时首选 |
| `GetObject<T>(Func<T,bool>)` | 查找第一个匹配对象 | 需要条件而没有 ID 时 |
| `GetObjectTypeList<T>()` | 取得已登记类型列表 | 遍历、校验和构建索引 |
| `LoadXML` / `LoadXml` | 合并 XML 并创建对象 | 游戏加载阶段；不要在运行时重复全量加载 |
| `PreAfterLoad()` / `AfterLoad()` | 广播全局存档恢复阶段 | 由加载管线调用，供对象生命周期使用 |
| `ClearAllObjects()` | 清空当前对象表 | 会话切换/销毁阶段，清空后旧引用失效 |

## 真实示例：注册自定义类型并取得实例

下面的注册形状对应源码中 `Game` 的 `OnRegisterTypes` 使用方式；`typeId` 属于对象系统的全局类型编号空间，不能随便与其他类型重复。

```csharp
public sealed class RelicObject : MBObjectBase
{
    public RelicObject() { }
    public RelicObject(string stringId) : base(stringId) { }
}

protected override void OnRegisterTypes(MBObjectManager objectManager)
{
    base.OnRegisterTypes(objectManager);
    objectManager.RegisterType<RelicObject>(
        "Relic", "Relics", 220u, autoCreateInstance: false, isTemporary: false);
}

RelicObject relic = MBObjectManager.Instance.CreateObject<RelicObject>("my_mod_relic_01");
RelicObject lookedUp = MBObjectManager.Instance.GetObject<RelicObject>(relic.StringId);
```

`CreateObject` 内部会构造对象、登记、触发 `OnRegistered`，并通知已添加的对象管理器 handler。不要先把同一对象 `new` 出来再把它当作已注册对象使用；需要手动登记时用 `RegisterObject` 并检查返回对象。

## XML 与读档边界

`LoadXml` 先按列表元素定位已注册类型，再以 XML `id` 取得 presumed 对象，调用该对象的 `Deserialize` 和 `AfterInitialized`。`CreateObjectFromXmlNode` 是单节点版本。对象在 `AfterLoad` 中解析其他对象，是因为管理器的 `PreAfterLoad`/`AfterLoad` 会在所有类型记录完成后统一执行。

`UnregisterNonReadyObjects` 会记录并移除没有进入 ready 状态的 presumed 对象；`ClearAllObjects` 则会移除当前会话的全部对象。两者都意味着之前保存的 C# 引用不能继续当作新会话对象使用。

## 风险与崩溃边界

- **注册类型过晚或重复。** XML 到来前未注册类型会找不到元素；重复或错误的 `typeId` 会污染类型表或触发引擎断言。把注册放在游戏类型的统一注册阶段，并为 mod 维护固定编号。
- **`StringId` 冲突会改名。** 具体类型记录在冲突时会追加数字直到找到空键；原始字符串不一定是对象最终 ID。使用模组前缀并从返回对象读取 `StringId`。
- **错误使用 presumed 注册。** `RegisterPresumedObject` 是加载路径的中间状态；如果对象没完成 `Deserialize`/`AfterInitialized`，清理阶段会移除它，后续引用变成 null。
- **把空查询当成成功。** `GetObject`、谓词查询和 XML 引用都可能返回 `null`。跨模块依赖要显式判空，并在缺失时选择跳过、回退或报告，而不是直接解引用。
- **在错误层修改业务。** 管理器只维护身份和生命周期；修改 Hero 金钱、Settlement 所属权等状态应使用对应 Action/Model，否则可能跳过事件、关系和派生缓存。
- **清空管理器后的旧引用。** `Destroy`/`ClearAllObjects` 后必须重新从 `Instance` 查询；缓存对象引用或把 `MBGUID` 当永久 ID 都会造成读档后错指。

## 跨版本提示

1.3.15 与 1.4.5 都提供 `RegisterType`、`CreateObject`、按字符串/谓词查询、XML 加载以及 `PreAfterLoad`/`AfterLoad`。具体模块的类型注册表和 XML 内容仍可能变化；跨版本 mod 不要只依赖一个版本存在的 `StringId`。

## 依赖关系

- 根契约：[MBObjectBase](../MBObjectBase/) 定义身份和对象生命周期。
- XML/游戏宿主：[Game](../../core-extra/Game/) 及其 `OnRegisterTypes` 阶段提供类型注册入口。
- 战役入口：[Campaign](../../campaign/Campaign/) 管理战役对象；[CampaignBehaviorBase](../CampaignBehaviorBase/) 是常见的业务调用宿主。
- 持久化：[SaveManager](../../save-system/SaveManager/) 与 [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) 负责保存对象图，不由管理器自行定义字段格式。

## 导航

- 父级：[campaign-ext API](./)
- 同级：[MBObjectBase](../MBObjectBase/) · [IDataStore](../IDataStore/)
- 相关：[Campaign](../../campaign/Campaign/) · [SaveManager](../../save-system/SaveManager/)
