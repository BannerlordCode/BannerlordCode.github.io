---
title: "AddMissionObjectBodyFlags"
description: "服务器 → 客户端的 mission object body flag 同步消息：三个只读属性 + 无参/带参双构造器 + OnRead/OnWrite；只在 SynchedMissionObject.AddBodyFlagsSynched 里被发出，且发送前会先判「是否已全部存在」而跳过。"
---

# AddMissionObjectBodyFlags

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class AddMissionObjectBodyFlags : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/AddMissionObjectBodyFlags.cs`

## 概述

一条**只从服务器发往客户端**的联机同步消息，作用是「给某个 mission object 追加一组 [BodyFlags](../../engine/BodyFlags)」。全文 77 行，`sealed`，不可继承。

```csharp
[DefineGameNetworkMessageType(GameNetworkMessageSendType.FromServer)]
public sealed class AddMissionObjectBodyFlags : GameNetworkMessage
{
    public MissionObjectId MissionObjectId { get; private set; }
    public BodyFlags BodyFlags { get; private set; }
    public bool ApplyToChildren { get; private set; }
}
```

三个特性/事实定死了它的使用方式：

- `[DefineGameNetworkMessageType(GameNetworkMessageSendType.FromServer)]` —— **方向是单向的**。这条消息不能被客户端主动发出，引擎的消息注册器会按 `FromServer` 归类。
- `sealed` —— 不能派生。
- 三个属性全是 `{ get; private set; }` —— **消息对象对外只读**。构造之后只能由 `OnRead` 这个反序列化钩子改写。

## 心智模型

一条网络消息的完整生命周期是四段，每段对应类里一个成员。

**第一段：构造（发送侧）。** 有两个构造函数：

```csharp
// AddMissionObjectBodyFlags.cs:28-38（两个 ctor，逐字）
public AddMissionObjectBodyFlags(MissionObjectId missionObjectId, BodyFlags bodyFlags, bool applyToChildren)
{
    this.MissionObjectId = missionObjectId;
    this.BodyFlags = bodyFlags;
    this.ApplyToChildren = applyToChildren;
}

public AddMissionObjectBodyFlags() { }
```

**带参的那个由发送方用，无参的那个由 `OnRead` 用。** `OnRead` 里是 `this.MissionObjectId = ...` 这种属性赋值，不是字段赋值——所以必须有无参 ctor 让 `this` 存在。

**第二段：序列化。** `OnWrite` 逐字段写包（`:51-56`）：

```csharp
protected override void OnWrite()
{
    GameNetworkMessage.WriteMissionObjectIdToPacket(this.MissionObjectId);
    GameNetworkMessage.WriteIntToPacket((int)this.BodyFlags, CompressionBasic.FlagsCompressionInfo);
    GameNetworkMessage.WriteBoolToPacket(this.ApplyToChildren);
}
```

三个字段的线格式各不相同：`MissionObjectId` 走专用的 `WriteMissionObjectIdToPacket`；`BodyFlags` 是一个 **int 位掩码**，走 `WriteIntToPacket` 并带 `CompressionBasic.FlagsCompressionInfo` 压缩元数据（`CompressionBasic.cs:63`：`new CompressionInfo.Integer(0, 30)`，即取值范围 0..30 的有符号整数）；`ApplyToChildren` 是一个 bit。

**第三段：反序列化。** `OnRead`（`:41-48`）用的是 `ref bool result` 的失败累积风格：

```csharp
protected override bool OnRead()
{
    bool result = true;
    this.MissionObjectId = GameNetworkMessage.ReadMissionObjectIdFromPacket(ref result);
    this.BodyFlags = (BodyFlags)GameNetworkMessage.ReadIntFromPacket(CompressionBasic.FlagsCompressionInfo, ref result);
    this.ApplyToChildren = GameNetworkMessage.ReadBoolFromPacket(ref result);
    return result;
}
```

每个读取方法都把失败写进 `result` 而不是抛异常，**三个字段无条件全部读取**（哪怕 `result` 已经是 false 也继续读）——这样包流不会错位。返回值 `result` 为 false 时消息被丢弃。

**第四段：投递。** 由 [MissionNetworkComponent](../../mission-ext/MissionNetworkComponent) 注册处理（第 73 行注册，第 794 行实现）：

```csharp
// MissionNetworkComponent.cs:794-801
private void HandleServerEventAddMissionObjectBodyFlags(GameNetworkMessage baseMessage)
{
    AddMissionObjectBodyFlags msg = (AddMissionObjectBodyFlags)baseMessage;
    MissionObject obj = Mission.MissionNetworkHelper.GetMissionObjectFromMissionObjectId(msg.MissionObjectId);
    if (obj != null)
    {
        obj.GameEntity.AddBodyFlags(msg.BodyFlags, msg.ApplyToChildren);
    }
}
```

**处理函数判空后静默丢弃**：`MissionObjectId` 查不到对象就直接返回，不报任何错。

**谁会发这条消息？** 全树唯一发送点是 `SynchedMissionObject.AddBodyFlagsSynched`（`TaleWorlds.MountAndBlade/SynchedMissionObject.cs:382-395`）：

```csharp
public void AddBodyFlagsSynched(BodyFlags flags, bool applyToChildren = true)
{
    if ((base.GameEntity.BodyFlag & flags) != flags)         // ← 全部已存在就整条跳过
    {
        if (GameNetwork.IsServerOrRecorder)
        {
            GameNetwork.BeginBroadcastModuleEvent();
            GameNetwork.WriteMessage(new AddMissionObjectBodyFlags(base.Id, flags, applyToChildren));
            GameNetwork.EndBroadcastModuleEvent(GameNetwork.EventBroadcastFlags.AddToMissionRecord, null);
        }
        base.GameEntity.AddBodyFlags(flags, applyToChildren);
        this._initialSynchFlags |= SynchedMissionObject.SynchFlags.SynchBodyFlags;
    }
}
```

所以这条消息的语义不是「设置」而是「**追加**」：客户端侧 `GameEntity.AddBodyFlags` 是 `this.BodyFlag |= bodyFlags;`（`TaleWorlds.Engine/GameEntity.cs:984`），**只加不减**，配合 `applyToChildren` 递归给所有子实体同样 OR 一次。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `MissionObjectId` | `public MissionObjectId MissionObjectId { get; private set; }` | 目标 mission object 的网络 ID。发送侧来自 `base.Id`（`SynchedMissionObject` 的 `GameEntity.Id`）。接收侧 `Mission.MissionNetworkHelper.GetMissionObjectFromMissionObjectId(id)` 反查，**查不到就整条消息丢弃**。 |
| `BodyFlags` | `public BodyFlags BodyFlags { get; private set; }` | 要追加的位掩码。线格式是 `WriteIntToPacket((int)this.BodyFlags, CompressionBasic.FlagsCompressionInfo)`，压缩元数据声明范围 `[0, 30]`。**「追加」语义来自接收侧的 `\|=`，不是来自消息本身**。 |
| `ApplyToChildren` | `public bool ApplyToChildren { get; private set; }` | 是否递归到子实体。`true` 时 `GameEntity.AddBodyFlags` 会 `foreach (GameEntity gameEntity in this.GetChildren()) gameEntity.AddBodyFlags(bodyFlags, true);` 递归下去。**发送侧 `AddBodyFlagsSynched` 的默认值是 `true`**，但 `SynchedMissionObject` 里另有一处 `Mission.cs:2823` 的 `weaponEntity.AddBodyFlags(bodyFlags, false)` 是**直接调 GameEntity、不过网络**的，不要混为一谈。 |
| `AddMissionObjectBodyFlags(MissionObjectId, BodyFlags, bool)` | 公开带参 ctor | 发送方专用。三个属性按顺序赋值，无校验、无范围检查。 |
| `AddMissionObjectBodyFlags()` | 公开无参 ctor | 反序列化专用。什么都不做，只让 `OnRead` 有个 `this`。**它也是 public 的，所以你能 `new` 一个空消息——但那样发出去会让客户端查不到对象或拿到 `BodyFlags = 0`。** |
| `OnRead` | `protected override bool OnRead()` | 三字段读包，`ref bool result` 累积失败。**包流格式与 `OnWrite` 必须严格配对**，改动一个必须同步改另一个。 |
| `OnWrite` | `protected override void OnWrite()` | 三字段写包。 |
| `OnGetLogFilter` | `protected override MultiplayerMessageFilter OnGetLogFilter()` | 返回 `MultiplayerMessageFilter.MissionObjectsDetailed`——这条消息的日志归到「mission 对象详细」分类下。 |
| `OnGetLogFormat` | `protected override string OnGetLogFormat()` | 日志字符串，见风险段的**三元写反**问题。 |

## 真实示例

**正确姿势：不要自己 new 这条消息，走 `SynchedMissionObject` 的同步方法。**

```csharp
// Mission.ActiveMissionObjects 遍历 → 筛出 SynchedMissionObject → 走同步方法。
// SynchedMissionObject 是 MissionObject 的子类（不是 MissionEntity 的组件），
// 所以正确写法是遍历 + 类型判断，而不是 entity.GetComponent<SynchedMissionObject>()。
foreach (MissionObject obj in Mission.Current.ActiveMissionObjects)
{
    SynchedMissionObject synced = obj as SynchedMissionObject;
    if (synced != null)
    {
        // 让这个物件在联机里变成可推动的：消息、OR 标志位、登记 late-join 同步位，一次做完。
        synced.AddBodyFlagsSynched(BodyFlags.Moveable, true);
        break;
    }
}
```

官方两个真实调用点可以对照：`TaleWorlds.MountAndBlade/DestructableComponent.cs:128` 与 `:165` 都是 `gameEntity.AddBodyFlags(BodyFlags.Moveable, true);`——**注意这两处调的是 `GameEntity.AddBodyFlags` 而不是 `SynchedMissionObject.AddBodyFlagsSynched`**，也就是说那两处**不同步到网络**。这个区别很关键，下面风险段第一条会讲后果。

**如果确实要手工构造这条消息（自定义 mission object 的联机逻辑），形状是这样的：**

```csharp
using NetworkMessages.FromServer;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Network.Messages;

public static void BroadcastBodyFlags(MissionObject target, BodyFlags flags)
{
    if (!GameNetwork.IsServerOrRecorder)
    {
        return; // 客户端发这条消息没有意义，引擎会拒绝
    }

    GameNetwork.BeginBroadcastModuleEvent();
    GameNetwork.WriteMessage(new AddMissionObjectBodyFlags(target.Id, flags, true));
    // AddToMissionRecord 让 late join 的玩家也能补收到这条
    GameNetwork.EndBroadcastModuleEvent(GameNetwork.EventBroadcastFlags.AddToMissionRecord, null);
}
```

`BeginBroadcastModuleEvent` / `WriteMessage` / `EndBroadcastModuleEvent` 三件套必须配对，`EndBroadcastModuleEvent` 的第二个参数传 `GameNetwork.EventBroadcastFlags.AddToMissionRecord` 才会写进 mission record 供 late join 回放。漏掉这一步的表现是：**当时在场的玩家能看到效果，后加入的玩家看不到。**

## 风险与边界

- **`OnGetLogFormat` 的三元表达式写反了。** `AddMissionObjectBodyFlags.cs:73` 是 `this.ApplyToChildren ? "" : " and to all of its children."`——**`ApplyToChildren` 为 true 时打印空串，为 false 时才打印「and to all of its children」**。语义正好相反：真正会作用到子实体的情况反而什么都不打印。这只影响联机调试日志的可读性（`OnGetLogFilter` 已经把它归到 `MissionObjectsDetailed` 类），**不影响消息本身的正确性**。排查同步问题时别被这条日志带偏方向。
- **`(BodyFlag & flags) != flags` 这个跳过条件意味着「部分重叠」和「完全缺失」走同一条路。** 假设实体当前有 `A`、你要加 `A|B`，`(A & (A|B)) == A != A|B` 成立，于是**整组 `A|B` 被发出**，客户端 `|=` 一次补齐——这是对的。但若当前已有 `A|B`、你再发 `A`，则 `(A|B & A) == A` 成立，**整条被跳过，`_initialSynchFlags |= SynchBodyFlags` 也一起被跳过**。所以「重复添加同一个 flag」是完全静默的 no-op，既不上网也不登记同步位。
- **`SynchedMissionObject` 上的 `AddBodyFlagsSynched` 与 `GameEntity.AddBodyFlags` 是两个方法、两种语义。** 前者会发网络消息并登记 `_initialSynchFlags |= SynchFlags.SynchBodyFlags`（供 late join 回放），后者**只改本地位**。官方 `DestructableComponent.cs:128,165` 用的就是后者——在联机战役里，这两行的效果**不会传播到其他玩家**。想要联机一致就必须用 `SynchedMissionObject` 那个版本。
- **`ApplyToChildren = true` 是递归且不可逆的。** `GameEntity.AddBodyFlags` 在 `applyToChildren` 为 true 时对每个子实体递归调用自身并传 `true`，所以一棵实体树上的所有节点都会被 OR 上同一组位。**没有对应的「只从子实体移除」路径**——移除走 `RemoveMissionObjectBodyFlags` + `SynchedMissionObject.RemoveBodyFlagsSynched`，而它的跳过条件是 `(BodyFlag & flags) != BodyFlags.None`（`SynchedMissionObject.cs:400`），条件比 Add 侧宽松得多，**导致 Add 与 Remove 的对称性被打破**：只要有任意一位重叠，Remove 就会发出。
- **`FlagsCompressionInfo` 声明的范围是 `[0, 30]`。** `CompressionBasic.cs:63` 的 `new CompressionInfo.Integer(0, 30)` 是**有符号**整数压缩元数据。`BodyFlags` 是位掩码、实际取值远超 30，这个压缩元数据只在底层差分编码时提供提示区间；**如果某个 flag 位组合的整数值落在声明区间之外，解码端不会报错但可能解出错误的值**。这是从 1.3.0 到 1.5.3 一路没动过的一处历史遗留。
- **`MissionObjectId` 查不到就静默丢弃。** 处理函数里 `if (missionObject != null)` 之外没有 else、没有日志、没有异常。客户端在 mission object 尚未 spawn 的时刻收到这条消息（早于对象创建），**效果就是永久丢失**。这是联机上「物件偶发不动」这类问题的常见根因，且没有任何错误信息可查。
- **不能从客户端主动发。** `[DefineGameNetworkMessageType(GameNetworkMessageSendType.FromServer)]` 声明了方向，客户端构造并 `WriteMessage` 会被引擎的消息路由拒绝。发送前必须自己判 `GameNetwork.IsServerOrRecorder`。
- **`sealed` + `private set` 意味着子类与外部代码都无法改这三个属性。** 想复用这条消息的逻辑，只能照抄它的 `OnWrite`/`OnRead` 配对，不能继承。

## 怎么用

### 怎么拿到它

声明在 `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/AddMissionObjectBodyFlags.cs:10`，上面一行（`:9`）挂着 `[DefineGameNetworkMessageType(GameNetworkMessageSendType.FromServer)]`——**FromServer 意味着只有服务端发、客户端收**。

两种角色：

| 角色 | 入口 | 说明 |
| --- | --- | --- |
| 发送方（通常轮不到你） | `SynchedMissionObject.AddBodyFlagsSynched(BodyFlags, bool)`（`TaleWorlds.MountAndBlade/SynchedMissionObject.cs:382`） | 它内部先判重，再在 `IsServerOrRecorder` 分支里 broadcast（`SynchedMissionObject.cs:389`），最后才 `base.GameEntity.AddBodyFlags` 本地生效 |
| 接收方 | 框架用**无参构造函数**（`:36`）造实例，再走 `OnRead()`（`:41`）填三个字段 | 你不new 它，只注册处理器 |

三个属性全是 `private set`（`:15`、`:20`、`:25`），所以**只能走三参构造函数**（`:28`）：

```csharp
public AddMissionObjectBodyFlags(MissionObjectId missionObjectId, BodyFlags bodyFlags, bool applyToChildren)
```

### 典型用法

要发这个消息，走同步入口而不是手写 broadcast：

```csharp
using TaleWorlds.MountAndBlade;

public static void MakePropMovable(SynchedMissionObject missionObject)
{
    if (missionObject == null)
    {
        return;
    }

    // 这一行内部就是 BeginBroadcastModuleEvent + WriteMessage(new AddMissionObjectBodyFlags(...))
    // + EndBroadcastModuleEvent(AddToMissionRecord)（SynchedMissionObject.cs:388-390）。
    missionObject.AddBodyFlagsSynched(BodyFlags.Moveable, true);
}
```

要在本地构造一个用于检查/测试的实例：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.NetworkMessages.FromServer;

// 属性是 private set，所以必须走三参构造。
// 第四个参数 ApplyToChildren 会原样进入 OnWrite（AddMissionObjectBodyFlags.cs:55）。
AddMissionObjectBodyFlags message = new AddMissionObjectBodyFlags(
    missionObject.Id,
    BodyFlags.Moveable,
    true);

// 想把它发出去，仍然需要外层的 Begin/Write/End 三件套。
```

### 最容易踩的坑

**自己 `new AddMissionObjectBodyFlags()` 然后给属性赋值。** 无参构造函数（`:36`）是空的，实例化后 `MissionObjectId` 是 `null`、`BodyFlags` 是 `0`、`ApplyToChildren` 是 `false`；而三个属性都是 `private set`，**从外部赋值根本编译不过**。如果绕过编译问题把这样一个空实例丢给 `WriteMessage`，`OnWrite`（`:51`）会执行 `GameNetworkMessage.WriteMissionObjectIdToPacket(this.MissionObjectId)`，**把 null 写进包**。后果在接收端：整条消息反序列化失败，`OnRead`（`:41`）返回 false，**这一批 broadcast 里的所有后续消息一起被丢弃**——表现为「客户端莫名其妙少了一批动作」，而不是一条清晰报错。

第二个坑在自己写新消息类时：`GameNetwork.CollectGameNetworkMessagesFromAssembly` 的筛选条件（`TaleWorlds.MountAndBlade/GameNetwork.cs:1313`）同时要求 **继承 `GameNetworkMessage`、`IsSealed`、以及有公开无参构造函数**，再加上特性。漏掉任何一条，这个类型就**被静默跳过、根本不注册**。后果是：编译通过、启动无异常、但处理器永远不触发，消息在网络上凭空消失。

## 跨版本提示

`AddMissionObjectBodyFlags.cs` 在 `bannerlord-1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3` 五棵树里**公开面与线格式完全冻结**：同样是 9 个成员（3 个属性 + 2 个构造函数 + `OnRead` / `OnWrite` / `OnGetLogFilter` / `OnGetLogFormat`），逐行比对 1.3.0 与 1.5.3 的 public/protected 声明集合，**差集为空**。`OnWrite` 里三个字段的写入顺序和 `CompressionBasic.FlagsCompressionInfo` 的用法一字未改，`OnGetLogFormat` 里那个写反的三元也**一直没有被修**。

`SynchedMissionObject.AddBodyFlagsSynched` 的跳过条件 `(base.GameEntity.BodyFlag & flags) != flags` 和 `SynchFlags.SynchBodyFlags` 标志位在这几棵树里同样未变。`GameEntity.AddBodyFlags` 的 `|=` + 递归实现也未变。

**结论：这条消息是跨 1.3 → 1.5 最稳定的一类东西。** 线格式没变意味着 1.3.0 客户端和 1.5.3 服务器理论上的协议兼容（前提是网络层没有别的变更）。你的 mod 抄 `SynchedMissionObject.AddBodyFlagsSynched` 的调用形状在哪个版本上都对。1.4.5 树是裁剪过的部分源码，无法作为对照。

## 依赖关系

- 基类：[GameNetworkMessage](../../mission-ext/GameNetworkMessage) 提供 `OnRead` / `OnWrite` / `OnGetLogFilter` / `OnGetLogFormat` 四个 `protected virtual` 抽象点与读包辅助静态方法（`ReadMissionObjectIdFromPacket` / `WriteIntToPacket` / `ReadBoolFromPacket` 等）
- 唯一发送点：[SynchedMissionObject](../../mission-ext/SynchedMissionObject) 的 `AddBodyFlagsSynched(BodyFlags, bool)` 第 389 行 `GameNetwork.WriteMessage(new AddMissionObjectBodyFlags(...))`
- 唯一接收点：[MissionNetworkComponent](../../mission-ext/MissionNetworkComponent) 第 73 行 `registerer.RegisterBaseHandler<AddMissionObjectBodyFlags>(...)` → 第 794 行 `HandleServerEventAddMissionObjectBodyFlags`
- 实际生效点：`TaleWorlds.Engine/GameEntity.cs:982` 的 `AddBodyFlags`（`BodyFlag |= bodyFlags` + 递归子实体）
- 数据类型：[BodyFlags](../../engine/BodyFlags)（位掩码枚举）、[MissionObjectId](../../mission-ext/MissionObjectId)
- 兄弟消息：`NetworkMessages/FromServer/RemoveMissionObjectBodyFlags.cs`，对应的 `SynchedMissionObject.RemoveBodyFlagsSynched`（跳过条件与 Add 侧不对称）
- 桶首页：[campaign-ext API 分区](../)