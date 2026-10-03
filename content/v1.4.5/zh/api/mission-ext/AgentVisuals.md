---
title: "AgentVisuals"
description: "Agent 外观的 native 封装：包住 MBAgentVisuals 与 Skeleton，把 AgentVisualsData 翻译成网格、颜色、动作通道的实际渲染调用，位于 Modules.Native 的 View 层。"
---

# AgentVisuals

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`（`Modules.Native` 下的 View 层）
**Type:** `public class AgentVisuals : IAgentVisual`
**Base:** `TaleWorlds.MountAndBlade.IAgentVisual`（接口）
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/AgentVisuals.cs`

## 概述

`AgentVisuals` 是 [AgentVisualsData](../AgentVisualsData/) 与引擎渲染层之间那层薄壳，907 行。它的私有字段只有两个：`private AgentVisualsData _data`（参数包本体）与 `private float _scale`。所有公开方法几乎都是一行转发——`_data.AgentVisuals.<某个 native 方法>(...)`——真正复杂的逻辑集中在两个私有方法里：私有 `Refresh(...)`（约 110 行，建网格 / 建骨架 / 定颜色 / 设动作通道）与 `AddSkinArmorWeaponMultiMeshesToEntity`（约 160 行，逐部件挂皮肤 + 护甲 + 武器的多网格）。

它是 [IAgentVisual](../IAgentVisual/) 的唯一内置实现，实例只由 [AgentVisualsCreator](../AgentVisualsCreator/) 的 `Create` 产生（`AgentVisuals.Create` 静态工厂转调私有构造）。

## 心智模型

把它当成**「native 句柄的托管包装 + 参数包」**，四个推论：

第一，**生命周期与 mission / scene 绑定，不是普通托管对象**。`_data.AgentVisuals` 是 `MBAgentVisuals`（native 句柄），`GetEntity()` / `GetWeakEntity()` 返回的是场景里的 `GameEntity`。**跨任务缓存 `IAgentVisual` 拿到的是已失效的 native 句柄**。

第二，**`Create` 是静态工厂而不是公开构造器**。类没有公开构造器（`Create` 走 `new AgentVisuals(data, name, ...)` 调的是私有构造）。要造视觉对象必须经 `AgentVisuals.Create` 或 `IAgentVisualCreator.Create`。

第三，**`Refresh` 会换掉整个 `_data`**。公开的 `Refresh(bool, AgentVisualsData, bool)` 实现是 `AgentVisualsData old = _data; _data = data; bool removeSkeleton = old.SkeletonTypeData != _data.SkeletonTypeData;` 然后调私有 Refresh。**「是否重建骨架」完全由骨架类型是否变化决定**——只换颜色不换骨架类型时走增量路径（`ClearAndAddChangedVisualComponentsOfWeapons`）。

第四，**「构造器里做了什么」与「Refresh 里做了什么」是两回事**。构造器里有 `_scale = ((_data.ScaleData <= 1E-05f) ? 1f : _data.ScaleData);`，而私有 `Refresh` 里是 `_scale = ((_data.ScaleData == 0f) ? MBBodyProperties.GetScaleFromKey(RaceData, IsFemale ? 1 : 0, BodyPropertiesData) : _data.ScaleData);`——**阈值不同（`<= 1E-05f` vs `== 0f`）、行为不同（一个取 1f、一个按体型现算）**。所以 `GetScale()` 在构造后与 Refresh 之后可能给出不同的值。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Create` | `public static AgentVisuals Create(AgentVisualsData data, string name, bool isRandomProgress, bool needBatchedVersionForWeaponMeshes, bool forceUseFaceCache)` | **唯一的创建入口**（静态工厂）。`name` 是 native 侧实体名；`isRandomProgress` 为 true 时初始动作从随机进度起播而不是从 0 播（[AgentVisualsCreator](../AgentVisualsCreator/) 恒传 false）。 |
| `IsFemale` | `public bool IsFemale` | 从 `_data.SkeletonTypeData` 反推性别：值为 1 / 5 / 6 / 7 时为 false（**这四个值在 `SkeletonType` 枚举里都是 Female**），其余为 true。它是只读计算属性，没有 setter。 |
| `GetVisuals` | `public MBAgentVisuals GetVisuals()` | 露出底层 native 对象。**这是越过封装直接操作的最短路径**，也是本类型唯一真正返回 native 引用的方法。 |
| `GetEntity` / `GetWeakEntity` | `public GameEntity GetEntity()` / `public WeakGameEntity GetWeakEntity()` | 底层场景实体。强弱引用两个版本并存：强引用会阻止实体被 GC 回收。 |
| `SetAction` | `public void SetAction(in ActionIndexCache actionIndex, float startProgress = 0f, bool forceFaceMorphRestart = true)` | 在**动作通道 0** 上播放动作。内部 `MBSkeletonExtensions.SetAgentActionChannel(skeleton, 0, ref actionIndex, startProgress, -0.2f, forceFaceMorphRestart, 0f)`，**形参带 `in`，调用时也必须写 `in`**。骨架为 null 时静默返回。 |
| `DoesActionContinueWithCurrentAction` | `public bool DoesActionContinueWithCurrentAction(in ActionIndexCache actionIndex)` | 判断新动作能否从当前进度平滑续播（走 `DoesActionContinueWithCurrentActionAtChannel(skeleton, 0, ...)`）。播动作前先问这个，能避免动作跳变。 |
| `GetAnimationParameterAtChannel` | `public float GetAnimationParameterAtChannel(int channelIndex)` | 读某个动作通道的播放进度。骨架为 null 时返回 `0f` 而不抛异常。 |
| `Refresh` | `public void Refresh(bool needBatchedVersionForWeaponMeshes, AgentVisualsData data, bool forceUseFaceCache = false)` | 换装 / 换色的公开入口。内部先换 `_data`、比对骨架类型决定是否重建，然后转私有 Refresh。**`oldEquipment` 传的是旧 `_data.EquipmentData`**，让引擎能只更新变化的武器网格。 |
| `GetCopyAgentVisualsData` | `public AgentVisualsData GetCopyAgentVisualsData()` | 取一份参数包副本（`new AgentVisualsData(_data)`）。这是「读当前外观配置再改再 Refresh」的标准三段式的第一步。 |
| `SetClothingColors` / `GetClothingColors` | `public void SetClothingColors(uint color1, uint color2)` / `public void GetClothingColors(out uint color1, out uint color2)` | 读写布料队色。注意 **`SetClothingColors` 只改 `_data`（调 `_data.ClothColor1(color1)`），不刷新网格**——想立刻看到颜色变化还要 `Refresh`。 |
| `GetBodyProperties` / `SetBodyProperties` | 对应方法 | 读写体型。改动同样需要 `Refresh` 才重建网格。 |
| `GetCharacterObjectID` / `SetCharacterObjectID` | 对应方法 | 读写角色的 StringId。`AddSkinMeshesToEntity` 会用 `MBObjectManager.Instance.GetObject<BasicCharacterObject>(CharacterObjectStringIdData)` 去取脸部生成数据。 |
| `GetEquipment` | `public Equipment GetEquipment()` | 当前外观用的装备。 |
| `Tick` / `TickVisuals` | `public void Tick(AgentVisuals parentAgentVisuals, float dt, bool isEntityMoving = false, float speed = 0f)` / `TickVisuals()` | 驱动动画通道。`Tick` 的 `parentAgentVisuals` 是**父级（骑手/挂载者）**，为 null 时不传父级骨骼（骑手独立动画）。`TickVisuals` 只推进面部动画通道。 |
| `Reset` / `ResetNextFrame` | `public void Reset()` / `ResetNextFrame()` | 重置动画通道到初始状态，一个立即生效、一个下一帧生效。 |
| `SetVisible` | `public void SetVisible(bool value)` | 显示 / 隐藏整个视觉对象（连带实体）。 |
| `GetGlobalStableEyePoint` / `GetGlobalStableNeckPoint` | `public Vec3 GetGlobalStableEyePoint(bool isHumanoid)` / `GetGlobalStableNeckPoint(bool isHumanoid)` | 取世界坐标下的稳定眼位 / 颈位。`isHumanoid` 决定按人形还是按通用骨骼取点。**摄像机与 UI 定位依赖这两个点。** |
| `GetScale` | `public float GetScale()` | 当前缩放。**注意构造后与 Refresh 后可能不一致**（见心智模型第四点）。 |
| `AddPrefabToAgentVisualBoneByBoneType` / `...ByRealBoneIndex` | 两个方法 | 往指定骨骼挂额外预制体（披风、持物装饰）。前者按 `HumanBone` 枚举、后者按 `sbyte` 真实骨骼下标。 |
| `SetAgentLodZeroOrMax` / `SetAgentLodZeroOrMaxExternal` | 对应方法 | 强制 LOD 为 0 或最高。远程玩家代理常用。 |
| `SetClothWindToWeaponAtIndex` | `public void SetClothWindToWeaponAtIndex(Vec3 localWindVector, bool isLocal, EquipmentIndex weaponIndex)` | 给某个武器槽位的布料施加风。这是旗帜 / 披风飘动效果的入口。 |
| `SetAgentLocalSpeed` / `SetLookDirection` | 对应方法 | 向 native 同步本地移动速度与视线方向，供动画状态机混合用。 |
| `SetFaceGenerationParams` / `SetVoiceDefinitionIndex` / `MakeRandomVoiceForFacegen` | 对应方法 | 角色捏脸与语音分配。只在 facegen 相关界面有意义。 |
| `GetRandomGlossFactor` / `GetRandomClothingColors` / `AddTeamColorToMesh` | 三个 `static` 方法 | 外观随机化工具。`GetRandomClothingColors` 按 `RandomGlossinessRange = 0.05f`、`RandomClothingColor1HueRange = 4f`、`RandomClothingColor2SaturationRange = 0.5f` 等六个具名常量，用 `MBFastRandom` 在 HSB 空间扰动。`AddTeamColorToMesh(MetaMesh, uint, uint)` 是队色上色的落点。 |
| `SetEntity` / `GetEntity` | 对应方法 | 换掉承载实体。 |

## 真实示例

标准三段式：取副本 → 改 → Refresh（`MultiplayerMissionAgentVisualSpawnComponent.cs:233` 一带就是这个形状）：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View;

IAgentVisual visual = targetVisual;
AgentVisualsData data = visual.GetCopyAgentVisualsData();
data.ClothColor1(teamColor1);
data.ClothColor2(teamColor2);
visual.Refresh(needBatchedVersionForWeaponMeshes: true, data: data, forceUseFaceCache: true);
```

自己造一份视觉对象——必须走静态工厂，且 `isRandomProgress` 决定初始动作的起点：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View;

AgentVisualsData data = new AgentVisualsData()
    .UseMorphAnims(true)
    .Equipment(character.Equipment)
    .BodyProperties(character.GetBodyProperties(character.Equipment, -1))
    .Frame(MatrixFrame.Identity)
    .Scale(1f)
    .Race(character.Race)
    .ClothColor1(0xFF0000u)
    .ClothColor2(0x0000FFu);

AgentVisuals visual = AgentVisuals.Create(data, "my_agent_visual", isRandomProgress: false, needBatchedVersionForWeaponMeshes: true, forceUseFaceCache: false);
Debug.Print("scale = " + visual.GetScale() + " female = " + visual.IsFemale, 0);
```

播动作前先问能否续播——这是避免动作跳变的官方用法：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View;

AgentVisuals visuals = (AgentVisuals)targetVisual;
ActionIndexCache next = ActionIndexCache.act_idle_unarmed_1;
if (!visuals.DoesActionContinueWithCurrentAction(in next))
{
    visuals.SetAction(in next, startProgress: 0f, forceFaceMorphRestart: true);
}
Debug.Print("progress on channel 0 = " + visuals.GetAnimationParameterAtChannel(0), 0);
```

取世界坐标下的眼位 / 颈位——摄像机定位与 UI 挂点依赖它们：

```csharp
using TaleWorlds.MountAndBlade.View;

AgentVisuals visuals = (AgentVisuals)targetVisual;
Debug.Print("eye=" + visuals.GetGlobalStableEyePoint(isHumanoid: true), 0);
Debug.Print("neck=" + visuals.GetGlobalStableNeckPoint(isHumanoid: true), 0);
Debug.Print("entity attached = " + (visuals.GetEntity() != null), 0);
```

按种子复现随机队色——这是「多人战场里同兵种外观稳定」的标准做法：

```csharp
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade.View;

Color baseRed = new Color(0.8f, 0.2f, 0.2f);
Color baseBlue = new Color(0.2f, 0.2f, 0.8f);
AgentVisuals.GetRandomClothingColors(seed: troopSeed, baseRed, baseBlue, out Color red, out Color blue);
Debug.Print("seed=" + troopSeed + " red=" + red + " blue=" + blue, 0);
```

## 风险与边界

- **native 边界，句柄与 mission / scene 绑定。** `_data.AgentVisuals` 是 `MBAgentVisuals`；跨任务缓存 `IAgentVisual` 拿到的是失效句柄。**不要缓存到 mission 之外。**
- **无公开构造器。** 只有静态 `Create` 与 [AgentVisualsCreator](../AgentVisualsCreator/) 那一层适配。
- **在 `Modules.Native` 的 View 层。** 引用它等于依赖 `TaleWorlds.MountAndBlade.View` 程序集；专用服务器 / 无渲染环境不可用。
- **`SetClothingColors` / `SetBodyProperties` / `SetCharacterObjectID` 只改数据不刷新。** 必须再调 `Refresh` 才看到效果——这是最常见的「改了没反应」。
- **`Refresh` 是否重建骨架只看 `SkeletonTypeData` 是否变化。** 换骨架类型触发全量重建（`ClearVisualComponents(false, false)` + `CreateWithActionSet`），其余走增量。
- **`IsFemale` 的判定是硬编码的四个数值（1 / 5 / 6 / 7）。** `SkeletonType` 枚举里它们都是 Female，但这个耦合是两份文件里的字面量，改枚举会静默改变判定。
- **`GetScale()` 在构造后与 Refresh 后可能不同。** 构造用 `<= 1E-05f` 阈值取 1f，私有 Refresh 用 `== 0f` 阈值按体型现算。
- **`SetAction` 形参带 `in`。** 调用时也必须写 `in`；骨架为 null 时静默无操作，返回 void 不代表播放成功。
- **动作通道写死。** `SetAction` / `DoesActionContinueWithCurrentAction` / `TickVisuals` 都只用通道 0。与 [AgentVictoryLogic](../AgentVictoryLogic/) 用的 1 号通道互不干扰，但也意味着本类型无法直接驱动副手动作。
- **大量方法不做 null 检查。** 传 null 的 `data`、把 `AgentVisuals` 字段置 null 后的调用，异常来自 native 层而非托管层，栈信息不友好。
- **`GetVisuals()` 让你能绕过全部封装。** 直接操作 `MBAgentVisuals` 不会与 `_data` 保持一致，之后 `Refresh` 可能覆盖你的手工改动。

## 依赖关系

- 接口契约：[IAgentVisual](../IAgentVisual/) 定义对外能力面（本类末尾还有一处显式接口实现 `void IAgentVisual.SetAction(...)` 转调公开的 `SetAction`）
- 参数来源：[AgentVisualsData](../AgentVisualsData/) 是它的构造输入；`GetCopyAgentVisualsData` 是「读当前配置再改」的入口
- 创建入口：[AgentVisualsCreator](../AgentVisualsCreator/) 的 `Create` 与本类的静态 `Create`；`Mission.AgentVisualCreator` 字段（`Mission.cs:1000`）在 `MissionScreen.cs:404` 被赋成默认实现
- native 载荷：[MBAgentVisuals](../MBAgentVisuals/)、`Skeleton`、`MBActionSet`、`MetaMesh`、`CompositeComponent`、`FaceGenerationParams`、`NativeObject`（均在 `TaleWorlds.Engine`）
- 辅助工具：`MBSkeletonExtensions`（`SetAgentActionChannel` / `CreateWithActionSet` / `TickActionChannels` / `GetActionAtChannel`）、`MonsterExtensions.FillAnimationSystemData`、`MountVisualCreator.AddMountMeshToEntity`
- 登记与回收：[AgentVisualHolder](../AgentVisualHolder/) 负责在 mission 层面管理视觉对象的存活
- 数据上游：[Mission](../../mission/Mission/) 的 `SpawnAgent` → `MultiplayerMissionAgentVisualSpawnComponent` 等处构造 `AgentVisualsData` 再交给本类
- 桶首页：[mission-ext API 分区](../)
