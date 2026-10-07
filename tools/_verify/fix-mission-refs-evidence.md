# 修复证据报告：mission-lifecycle.md 引用复核

## 概述

- **目标文件：**
  - `content/v1.3.15/zh/architecture/mission-lifecycle.md`
  - `content/v1.3.15/en/architecture/mission-lifecycle.md`
- **源文件行数：**
  - `MissionState.cs`: 408 行
  - `Mission.cs`: 8551 行
  - `MissionBehavior.cs`: 325 行
  - `Agent.cs`: 6985 行

## 引用统计

- **引用总数：** 29 条（去重后 28 条，`MissionState.cs:270` 出现两次）
- **修改条数：** 15 条（zh 和 en 各 15 条）
- **删除条数：** 0 条
- **保留条数：** 13 条
- **链接修复：** 1 条（MissionState 链接路径修正）

## 逐条核验记录

### MissionState.cs 引用（8 条）

| 引用 | 核验结果 | 处理 |
|------|----------|------|
| `MissionState.cs:84` | ❌ 指向 `}`，非声明处 | ✅ 改为 `88`（`OnTick` 声明） |
| `MissionState.cs:112` | ❌ 指向 `this.MissionReplayStartTime = 0f;`，非声明处 | ✅ 改为 `142`（`TickMission` 声明） |
| `MissionState.cs:139` | ❌ 指向 `}`，非声明处 | ✅ 改为 `252`（`LoadMission` 声明） |
| `MissionState.cs:196` | ❌ 指向 `num2 -= 0.1f;`，非声明处 | ✅ 改为 `299`（`AddBehaviorsToMission` 声明） |
| `MissionState.cs:270` | ✅ 指向 `protected Mission HandleOpenNew(...)` | 保留 |
| `MissionState.cs:318` | ✅ 指向 `public static Mission OpenNew(...)` | 保留 |
| `MissionState.cs:4512` | ❌ **越界**（文件仅 408 行） | ✅ 改为 `333`（`AddDefaultMissionBehaviorsTo` 声明） |
| `MissionState.cs:4654` | ❌ **越界**（文件仅 408 行） | ✅ 改为 `351`（`FinishMissionLoading` 声明） |

**核验命令：**
```bash
sed -n '84p' MissionState.cs   # → }
sed -n '88p' MissionState.cs   # → protected override void OnTick(float realDt)
sed -n '112p' MissionState.cs  # → this.MissionReplayStartTime = 0f;
sed -n '142p' MissionState.cs  # → private void TickMission(float realDt)
sed -n '139p' MissionState.cs  # → }
sed -n '252p' MissionState.cs  # → private void LoadMission()
sed -n '196p' MissionState.cs  # → num2 -= 0.1f;
sed -n '299p' MissionState.cs  # → private void AddBehaviorsToMission(...)
sed -n '270p' MissionState.cs  # → protected Mission HandleOpenNew(...)
sed -n '318p' MissionState.cs  # → public static Mission OpenNew(...)
sed -n '333p' MissionState.cs  # → private static IEnumerable<MissionBehavior> AddDefaultMissionBehaviorsTo(...)
sed -n '351p' MissionState.cs  # → private void FinishMissionLoading()
```

### Mission.cs 引用（18 条）

| 引用 | 核验结果 | 处理 |
|------|----------|------|
| `Mission.cs:604` | ✅ 指向 `public void Initialize()` | 保留 |
| `Mission.cs:607` | ❌ 指向 `this.CurrentState = Mission.State.Initializing;`，非声明处 | ✅ 改为 `604` |
| `Mission.cs:1123` | ✅ 指向 `public void OnMissionStateFinalize(...)` | 保留 |
| `Mission.cs:2306` | ✅ 指向 `public Mission(...)` 构造函数 | 保留 |
| `Mission.cs:2317` | ❌ 指向 `this.CurrentState = Mission.State.NewlyCreated;`，非声明处 | ✅ 改为 `2306` |
| `Mission.cs:2545` | ✅ 指向 `internal void OnAgentDeleted(...)` | 保留 |
| `Mission.cs:2563` | ✅ 指向 `internal void OnAgentRemoved(...)` | 保留 |
| `Mission.cs:3306` | ✅ 指向 `public void OnTick(...)` | 保留 |
| `Mission.cs:3455` | ✅ 指向 `public void AfterStart()` | 保留 |
| `Mission.cs:3491` | ❌ 指向 `this.CurrentState = Mission.State.Continuing;`，非声明处 | ✅ 改为 `3455` |
| `Mission.cs:4315` | ✅ 指向 `public void EndMission()` | 保留 |
| `Mission.cs:4321` | ❌ 指向 `this.CurrentState = Mission.State.EndingNextFrame;`，非声明处 | ✅ 改为 `4315` |
| `Mission.cs:4325` | ✅ 指向 `private void EndMissionInternal()` | 保留 |
| `Mission.cs:4354` | ❌ 指向 `this.CurrentState = Mission.State.Over;`，非声明处 | ✅ 改为 `4325` |
| `Mission.cs:4364` | ❌ 指向 `this._ambientSoundEvent.Stop();`，非声明处 | ✅ 改为 `4369`（`AddMissionBehavior` 声明） |
| `Mission.cs:4850` | ✅ 指向 `public void InitializeStartingBehaviors(...)` | 保留 |
| `Mission.cs:8209` | ✅ 指向 `public enum State` | 保留 |

**核验命令：**
```bash
sed -n '604p' Mission.cs   # → public void Initialize()
sed -n '607p' Mission.cs   # → this.CurrentState = Mission.State.Initializing;
sed -n '1123p' Mission.cs  # → public void OnMissionStateFinalize(bool forceClearGPUResources)
sed -n '2306p' Mission.cs  # → public Mission(MissionInitializerRecord rec, ...)
sed -n '2317p' Mission.cs  # → this.CurrentState = Mission.State.NewlyCreated;
sed -n '2545p' Mission.cs  # → internal void OnAgentDeleted(Agent affectedAgent)
sed -n '2563p' Mission.cs  # → internal void OnAgentRemoved(...)
sed -n '3306p' Mission.cs  # → public void OnTick(float dt, ...)
sed -n '3455p' Mission.cs  # → public void AfterStart()
sed -n '3491p' Mission.cs  # → this.CurrentState = Mission.State.Continuing;
sed -n '4315p' Mission.cs  # → public void EndMission()
sed -n '4321p' Mission.cs  # → this.CurrentState = Mission.State.EndingNextFrame;
sed -n '4325p' Mission.cs  # → private void EndMissionInternal()
sed -n '4354p' Mission.cs  # → this.CurrentState = Mission.State.Over;
sed -n '4364p' Mission.cs  # → this._ambientSoundEvent.Stop();
sed -n '4369p' Mission.cs  # → public void AddMissionBehavior(MissionBehavior missionBehavior)
sed -n '4850p' Mission.cs  # → public void InitializeStartingBehaviors(...)
sed -n '8209p' Mission.cs  # → public enum State
```

### MissionBehavior.cs 引用（2 条）

| 引用 | 核验结果 | 处理 |
|------|----------|------|
| `MissionBehavior.cs:28` | ❌ 指向 `// Token: 0x170006D9 RID: 1753`，非声明处 | ✅ 改为 `33`（`OnAfterMissionCreated` 声明） |
| `MissionBehavior.cs:38` | ❌ 指向 `OnBehaviorInitialize` 声明，但文档引用的是 `OnCreated` | ✅ 改为 `43`（`OnCreated` 声明） |

**核验命令：**
```bash
sed -n '28p' MissionBehavior.cs   # → // Token: 0x170006D9 RID: 1753
sed -n '33p' MissionBehavior.cs   # → public virtual void OnAfterMissionCreated()
sed -n '38p' MissionBehavior.cs   # → public virtual void OnBehaviorInitialize()
sed -n '43p' MissionBehavior.cs   # → public virtual void OnCreated()
```

### Agent.cs 引用（1 条）

| 引用 | 核验结果 | 处理 |
|------|----------|------|
| `Agent.cs:5484` | ❌ 指向 `this._removalTime = this.Mission.CurrentTime;`，非声明处 | ✅ 改为 `5481`（`OnRemove` 声明） |

**核验命令：**
```bash
sed -n '5481p' Agent.cs   # → internal void OnRemove()
sed -n '5484p' Agent.cs   # → this._removalTime = this.Mission.CurrentTime;
```

## 链接修复

| 链接 | 问题 | 处理 |
|------|------|------|
| `../../api/mission/MissionState/` | ❌ 断链（路径不存在） | ✅ 改为 `../../api/mission-ext/MissionState/` |

**原因：** MissionState 类页面位于 `api/mission-ext/` 而非 `api/mission/`。

## 验收结果

- [x] 该页 0 条越界引用
- [x] 该页 0 条 `../api/` 形态（使用 `../../api/`）
- [x] `node tools/audit-links.mjs` 中该页断链数 = 0
- [x] U+FFFD = 0
- [x] zh 与 en 同步修改

## 审计工具输出对比

| 指标 | 修复前 | 修复后 |
|------|--------|--------|
| BROKEN_LINKS | 56 | 52 |
| FILES_WITH_BROKEN | 6 | 2 |
| mission-lifecycle 断链数 | 1 | 0 |
