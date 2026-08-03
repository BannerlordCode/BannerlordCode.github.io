---
title: "MBObjectManager：游戏对象注册表与 XML 装配器"
description: "v1.4.5 中每个 Game 会话的 MBObjectBase 类型表、StringId/MBGUID 双索引和 XML 对象装配器。说明 Game 初始化、注册/预注册/查找、加载回调、清理，以及错误时机、重复 ID 与失效引用的崩溃和坏档边界。"
---

# MBObjectManager：游戏对象注册表与 XML 装配器

**命名空间：** `TaleWorlds.ObjectSystem`  
**模块：** `TaleWorlds.ObjectSystem`  
**类型：** `public sealed class MBObjectManager`  
**基类：** 无  
**源码：** `bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/MBObjectManager.cs`

## 一句话职责

把已声明的 `MBObjectBase` 子类变成一个随 `Game` 会话存活、可按 XML 标签、`StringId` 或 `MBGUID` 查找的对象表，并在 XML/存档装配和游戏结束时协调其生命周期。

## 心智模型：不是通用 DI 容器

`MBObjectManager` 是**游戏定义对象的注册表**，而不是为任意 mod 服务提供对象的容器。一个已注册类型对应一个内部 `ObjectTypeRecord<T>`：它保存 XML 单数标签（如 `Item`）、列表根标签（如 `Items`）、稳定的类型号、`StringId -> T` 字典、`MBGUID -> T` 字典和顺序表。

`Game.CreateGame` 与 `Game.LoadSaveGame` 都先调用 `MBObjectManager.Init()`，再由 `Game.RegisterTypes`、`GameType.BeforeRegisterTypes`、`GameType.OnRegisterTypes` 和游戏管理器登记可用类型。随后 `Game.Current.ObjectManager` 持有这一个实例；`MBObjectManager.Instance` 是同一对象的静态捷径。战役的 `Campaign.OnRegisterTypes` 例如登记 `MobileParty`、`Hero`、`Settlement` 等，基础游戏登记 `ItemObject`、`SkillObject` 等。

它的正常数据流是：

```text
Game.CreateGame / Game.LoadSaveGame
  -> Init + RegisterTypes
  -> GameType.OnRegisterTypes: RegisterType<T>(XML 标签, 列表标签, 类型号)
  -> LoadXML: 合并模块 XML，按标签取得或创建 presumed 对象
  -> MBObjectBase.Deserialize -> AfterInitialized
  -> 游戏代码按 StringId / MBGUID 查询
  -> Game.Destroy -> ClearAllObjects -> Instance = null
```

### 何时使用

- 在已经建立的游戏会话中，按 `StringId` 取得真实存在的定义对象，或枚举某个已注册的对象类型。
- 在游戏类型注册阶段，为真正参与该游戏类型 XML、引用解析或存档的 `MBObjectBase` 子类建立类型记录。
- 在引擎式数据加载路径中，用 `LoadXML` / `ReadObjectReferenceFromXml` 解析模块 XML；普通玩法逻辑通常只做查找。

### 何时不要使用

- 不要在 `MBSubModuleBase` 构造函数、模块发现阶段或 `Game` 销毁后访问 `Instance`。此时它可以是 `null`，裸访问会触发 `NullReferenceException`。
- 不要把它当作 Campaign 世界状态的修改入口。给英雄金钱、移动队伍、换领主等仍应走相应的 [Action](../) 和领域 API；注册表只解决“对象是谁”，不负责维持战役规则、事件和关系的一致性。
- 不要在常规 mod 初始化中随意 `Init()`、`Destroy()` 或重新注册引擎类型。它们是 `Game` 的会话边界操作，会替换或清空全局注册表。

## 依赖与边界

```text
[Game](../../core/Game)
  owns -> MBObjectManager
  creates/loads -> [MBObjectBase](../MBObjectBase) records
  exposes -> StringId and [MBGUID](../MBGUID) lookup
  loads -> XML definitions and object references
  is extended by -> [Campaign](../../campaign/Campaign) type registration
  is consumed by -> [MobileParty](../../campaign/MobileParty) and [CharacterObject](../../campaign/CharacterObject)
```

- **上游：** [Game](../../core/Game) 创建、持有并销毁管理器；[MBSubModuleBase](../../core/MBSubModuleBase) 的游戏会话钩子是 mod 获得 `Game` 的正确时机。
- **对象契约：** [MBObjectBase](../MBObjectBase) 保存 `StringId`、`MBGUID`、初始化和 ready 状态；注册会调用其 `OnRegistered()` / `AfterRegister()`，反注册会调用 `OnUnregistered()`。
- **加载：** `MBObjectManagerExtensions.LoadXML` 从 `Game.Current.GameType` 取得开发模式和游戏类型字符串，再调用 `LoadXML`。它合并模块 XML，依据列表标签找到类型记录。
- **战役与存档：** [Campaign](../../campaign/Campaign) 在 `OnRegisterTypes` 为战役对象指定类型号；读取存档时先注册类型、初始化保存对象、`ReInitialize()` 复原每个类型记录的下一个子 ID，之后才完成加载回调。[SaveManager](../../save-system/SaveManager) 负责该保存管线的持久化部分。

## 两把键：`StringId` 与 `MBGUID`

`StringId` 是 XML 和玩法代码最常用的名字键。`MBGUID` 则由记录的 `typeId` 和递增子 ID 组成：高位标识对象类型，低 26 位标识该类型内的实例。成功新注册时管理器分配 `MBGUID`，并把同一对象放入两张字典。

因此二者用途不同：用 `GetObject<T>(stringId)` 消费配置或保存的对象名；在保存的对象已持有 `MBGUID` 时用 `GetObject(MBGUID)` 回找。不要自己伪造类型号或缓存来自上一局游戏的 GUID。

## 生命周期与加载

### 创建、登记、销毁

| 阶段 | 实际行为 | mod 的边界 |
|---|---|---|
| `Init()` | 无条件创建新的静态实例。`Game` 在新局和读档时调用它。 | 由 `Game` 调用；mod 不应拿它当初始化 API。 |
| `RegisterType<T>` | 添加类型记录：XML 单数/列表标签、`typeId`、是否允许 presumed 自动创建、是否临时。 | 只在 `GameType` 的注册阶段做；先检查 `HasType<T>()`，不要重复登记。 |
| `RegisterObject` | 新对象进入记录、得到 GUID、变为 ready，并触发 `OnRegistered()`。 | 仅对已登记的确切类型和受控生命周期对象使用。 |
| `LoadXML` | 以 `id` 获取或创建 presumed 对象，执行 `Deserialize`，再 `AfterInitialized`。 | 使用游戏加载流程；不要从 tick 中重载定义 XML。 |
| `Destroy()` | 反序清空所有对象、通知反注册 handler，最后令 `Instance = null`。 | 游戏结束后清除自身缓存和 handler，不再使用任何旧对象引用。 |

### presumed 对象解决前向引用

XML 里的引用可以先于对象正文出现。内部 `GetPresumedObject` 先按类型标签和 ID 查找；找不到时，若该类型记录的 `autoCreateInstance` 为真，便构造一个 `StringId` 已知但 `IsInitialized = false`、`IsReady = false` 的对象，以 presumed 方式登记。真正 XML 节点到来时同一登记对象会被 `Deserialize`，随后 `AfterInitialized()` 把已注册对象设为 ready。

`RegisterPresumedObject<T>` 公开暴露同类语义：同 ID 已存在时，presumed 注册直接返回已有对象；它不会用传入的新实例替换旧对象。`autoCreateInstance` 为假且 XML 引用尚无对象时，会抛出 `MBCanNotCreatePresumedObjectException`。这就是为何 XML 引用必须使用已登记的类型前缀和真实 ID。

## 关键入口：用途、时机与副作用

### 类型记录

| 入口 | 用途和时机 | 副作用 / 失败面 |
|---|---|---|
| `RegisterType<T>(classPrefix, classListPrefix, typeId, autoCreateInstance, isTemporary)` | 在 `GameType.OnRegisterTypes` 中定义 `T` 的 XML 标签和 GUID 类型号。`Campaign` 正是在此阶段登记 `Hero`、`MobileParty` 等。 | 只追加记录，不会加载 XML。类型太多会触发 `MBTooManyRegisteredTypesException` 的断言路径；冲突的类型号、标签或重复登记会使引用和存档语义不可预测。 |
| `HasType<T>()` / `HasType(Type)` | 在扩展注册前确认类型记录是否已存在。密封类型做精确匹配；基类请求会接受可赋值的已登记子类。 | 这是查询，不会登记类型。`false` 不代表可以在任意阶段注册，仍必须处在游戏类型注册期。 |
| `FindRegisteredClassPrefix(Type)` | 由 CLR 类型反查 XML 单数标签。 | 未登记时触发失败断言并返回 `null`；不要把返回值当成任意用户输入的验证器。 |
| `FindRegisteredType(classPrefix)` | 由 XML 单数标签反查 CLR 类型，适合加载器/诊断器。 | 未知标签同样走失败断言并返回 `null`。列表根标签不是这里的参数。 |

### 对象登记和查找

| 入口 | 用途和时机 | 副作用 / 失败面 |
|---|---|---|
| `RegisterObject<T>(obj)` | 为一个已注册 `T` 加入正式对象。常见于引擎建立临时战役对象。 | 赋新 GUID、写入两张索引、追加列表、置 ready、调用 `OnRegistered()`。重复 `StringId` 不会报错：管理器会改写新对象 ID，在末尾递增数字直到唯一；依赖原 ID 的 XML/存档引用会指向意料之外的对象。 |
| `RegisterPresumedObject<T>(obj)` | 只在先占位、后反序列化的装配逻辑中使用。 | 同 ID 已存在时返回旧对象，传入对象被丢弃；新对象保持 not-ready。把它用于普通实体创建会制造半初始化对象。 |
| `GetObject<T>(string)` | 最常见的玩法查找。可用 `Game.Current.ObjectManager` 或已交给钩子的 `Game` 实例调用。 | 未找到返回 `null`。密封 `T` 只查精确记录；非密封基类会扫描可赋值的记录。必须检查空值后再解引用。 |
| `GetObject(MBGUID)` | 从保存或已持有的 GUID 回找对象；它先按 GUID 的类型号选记录。 | 未知类型号走失败断言，未知对象返回 `null`。GUID 只在当前已登记会话有意义。 |
| `GetObject(typeName, objectName)` | XML 风格的“类型标签 + ID”查找。 | 标签未登记触发失败断言；对象缺失返回 `null`。 |
| `GetObjectTypeList<T>()` / `CreateObjectTypeList(Type)` | 在加载完成后枚举已登记对象。前者给密封类型的只读列表，基类请求会聚合可赋值子类。 | 未登记的密封类型会走失败断言；不要在 XML 尚未装配完时把 presumed/not-ready 对象当成完整定义。 |
| `UnregisterObject(obj)` | 在受控卸载、临时类型清理或游戏结束时删除对象。 | 按运行时**精确类型**删除两张索引和列表，触发 `OnUnregistered()` 及 handler。未登记类型触发失败断言，旧引用不会自动失效为 `null`。 |

### 加载、存档和 handlers

| 入口 | 真实用途 | 时机与副作用 |
|---|---|---|
| `LoadXML(id, isDevelopment, gameType, ...)` | 合并模块 XML，找到与列表根标签匹配的类型记录；每个非注释节点按 `id` 取得 presumed 对象，调用 `Deserialize(this, node)` 和 `AfterInitialized()`。 | 用于游戏的数据装配期。核心扩展方法 `LoadXML(id)` 会从当前 `Game` 取模式信息；缺 `id`、坏引用或错误标签会在反序列化路径中失败。 |
| `ReadObjectReferenceFromXml<T>` | 读取 `TypePrefix.StringId` 形式的属性并取得 presumed 对象，以允许前向引用。 | 缺属性返回 `null`；没有点、空前缀或空 ID 抛 `MBInvalidReferenceException`。返回值转成错误 `T` 时为 `null`，因此必须验证类型。 |
| `PreAfterLoad()` / `AfterLoad()` | `MBObjectManager` 按 `ObjectTypeRecords` 正序遍历；每个 `ObjectTypeRecord<T>` 再按 `RegisteredObjectsList` 倒序转发到 `MBObjectBase.PreAfterLoadInternal()` / `AfterLoadInternal()`。 | 属于保存系统加载过程，不是普通初始化回调；不要手动穿插调用以“修复”对象。 |
| `AddHandler` / `RemoveHandler` | 加入或移除 [IObjectManagerHandler](../IObjectManagerHandler)。 | `AfterCreateObject` **只由** `CreateObject<T>` 在正式登记后触发，不会补发给既有对象，也不会在 XML `RegisterObject` 路径触发。`AfterUnregisterObject` 会在显式反注册、清空对象和 `Destroy()` 时触发。handler 应在自己的游戏生命周期结束前移除；从未添加 handler 时调用 `RemoveHandler` 会因内部列表为 `null` 而失败。 |

`CreateObject<T>(stringId)` 是 `RegisterObject` 加 handler 通知的便捷入口；引擎的 `Campaign.OnNewCampaignStart` 以它创建 `"player_party"`。无参重载只用类型名加 `_1`，容易与已有内容冲突，因此不是稳定 XML/存档对象 ID 的来源。

## 真实查找示例

引擎的攻城器械在装填时，通常把当前装填 `Agent` 装备项的 `Item.StringId` 作为 `missileItemID` 解析为对象；同一个字符串也用于匹配场景实体 tag。下面的查找应发生在已有 `Game`、类型已登记且 XML 已加载之后：

```csharp
using TaleWorlds.Core;
using TaleWorlds.ObjectSystem;

public static ItemObject ResolveMissile(string missileItemId)
{
    ItemObject missile = Game.Current.ObjectManager.GetObject<ItemObject>(missileItemId);
    if (missile == null)
    {
        return null;
    }

    return missile;
}
```

此处 `missileItemId` 应来自当前装填 `Agent` 的装备项 `Item.StringId`，而非编造的 ID；同名场景实体 tag 才能与该弹药匹配。调用者必须决定缺失对象是跳过功能、报告加载错误还是终止当前内容，不能在 `null` 上继续创建 `MissionWeapon` 或读取属性。

## 真实创建路径：引擎如何登记战役对象

下例是 `Campaign.OnNewCampaignStart` 的实际模式：`MobileParty` 已由 `Campaign.OnRegisterTypes` 登记后，才通过单例创建并登记主队伍。它说明顺序，不是让普通 mod 在任意回调复制一份主队伍。

```csharp
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.ObjectSystem;

MobileParty mainParty = MBObjectManager.Instance.CreateObject<MobileParty>("player_party");
```

若要增加持久战役实体，应先确认它由哪个游戏类型注册、谁负责初始化、哪个 Action/Behavior 维护其关系和存档，而不是仅因 `CreateObject` 可调用就绕过领域构造流程。

## 崩溃、坏档与引用风险

- **初始化前访问：** `Instance` 只有在 `Game.CreateGame` / `LoadSaveGame` 已执行后有效。在 SubModule 加载或会话结束后读它，常见结果是空引用崩溃。
- **重复 `StringId`：** 正式登记会静默重命名新对象；presumed 登记会静默保留旧对象。两者都可能让 XML、网络或存档中写下的 ID 指向错误定义。为跨存档对象使用固定、模块命名空间化的 ID，并在登记前检查冲突。
- **类型未注册或不匹配：** `RegisterObject<T>` 按泛型 `T` 找记录，`UnregisterObject` 按运行时精确类型找记录。没有对应记录会走失败断言；错误 XML 前缀或把对象当成错误基类读取，会得到 `null` 或在后续解引用时崩溃。
- **presumed 对象过早消费：** 占位对象在 `Deserialize` 与 `AfterInitialized` 之前 `IsReady` 为假。把它用于计算装备、派系或战役关系会引入空字段和加载期崩溃。
- **卸载后保留引用：** `Destroy()` 会清空所有记录并置空单例，但不会让你持有的 C# 引用自动变成 `null`。在下一局或卸载后复用旧对象/GUID，会把状态带到错误会话，造成空引用、错误查找或存档污染。
- **手动重载 XML：** XML 解析会复用 presumed 对象而不是一般意义上的“热替换”，并可能吞掉加载内部异常。不要在运行中的 campaign tick 中重载注册对象表。

## 导航

**↑ Parent**

- [Campaign extension API index](../)
- [v1.4.5 version home](../../../)

**↔ Siblings**

- [MBObjectBase](../MBObjectBase)
- [MBGUID](../MBGUID)
- [IObjectManagerHandler](../IObjectManagerHandler)

**Related**

- [Game](../../core/Game)
- [MBSubModuleBase](../../core/MBSubModuleBase)
- [Campaign](../../campaign/Campaign)
- [MobileParty](../../campaign/MobileParty)
- [CharacterObject](../../campaign/CharacterObject)
- [SaveManager](../../save-system/SaveManager)
- [Doc contract](../../../architecture/doc-contract)
