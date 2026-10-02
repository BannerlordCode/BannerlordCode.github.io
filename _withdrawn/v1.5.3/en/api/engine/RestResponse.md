---
title: "RestResponse"
description: "Auto-generated class reference for RestResponse."
---
# RestResponse

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public sealed class RestResponse : RestData `
**Base:** RestData
**Source:** TaleWorlds.Diamond/Rest/RestResponse.cs

## Overview

Auto-generated stub for `RestResponse`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### SetSuccessful
`public void SetSuccessful(bool successful,string successfulReason)`

### Create
`public static RestResponse Create(bool successful,string successfulReason)`

### CreateFailure
`public static RestResponse CreateFailure(string reason,string errorDetail = null)`

### TryDequeueMessage
`public RestResponseMessage TryDequeueMessage()`

### ClearMessageQueue
`public void ClearMessageQueue()`

### EnqueueMessage
`public void EnqueueMessage(RestResponseMessage message)`

## See Also

- [Section index](../)
