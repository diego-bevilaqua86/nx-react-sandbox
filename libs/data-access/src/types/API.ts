export type OnMutationSettledHandler<TData, TError, TVariables> = (
  data: TData | undefined,
  error: TError | null,
  variables: TVariables
) => Promise<unknown> | unknown;

export type OnMutationSuccessHandler<TData, TVariables> = (
  data: TData,
  variables: TVariables
) => Promise<unknown> | unknown;

export type OnMutationErrorHandler<TError, TVariables> = (
  error: TError,
  variables: TVariables
) => Promise<unknown> | unknown;

export type OnMutateHandler<TVariables> = (variables: TVariables) => Promise<unknown> | unknown;
